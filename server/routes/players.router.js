const express = require('express');
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlText = `
    SELECT
        "players"."id" as "playerId",
        "players"."first_name" as "firstName",
        "players"."last_name" as "lastName",
        "players"."time_created" as "timeAdded",
        "teams"."team_name" as "team",
        "positions"."position" as "position",
        "users"."first_name" as "addedBy",
        "tags"."tag" as "tags",
        ARRAY_AGG("playersRankings"."tier_id") as "tier",
        ARRAY_AGG("playersRankings"."rank") as "tierRank"
    FROM "tiers"
    JOIN "playersRankings"
        ON "playersRankings"."tier_id" = "tiers"."id"
    JOIN "players"
        ON "players"."id" = "playersRankings"."player_id"
    FULL JOIN "playersTags"
        ON "playersTags"."player_id" = "players"."id"
    FULL JOIN "tags"
        ON "tags"."id" = "playersTags"."tag_id"
    JOIN "positions"
        ON "positions"."id" = "players"."position_id"
    JOIN "teams"
        ON "teams"."id" = "players"."team_id"
    JOIN "users"
        ON "users"."id" = "players"."created_by_user_id"
    GROUP BY "playerId", "firstName", "lastName", "timeAdded", "team", "tags", "position", "addedBy"
    ORDER BY "timeAdded" DESC
    `;
    pool.query(sqlText)
    .then((dbRes) => {
        res.send(dbRes.rows)
    })
    .catch((error) => {
        console.log('get tags error', error);
        res.sendStatus(500);
    });
});

router.post('/', rejectUnauthenticated, async (req, res) => {
    const client = await pool.connect();
  
    try {
        const {
            newPlayer,
            rankingsToPass,
            playersTag
        } = req.body;
        const {
            firstName,
            lastName,
            team,
            position,
            createdByUserId
        } = newPlayer;
        await client.query('BEGIN');
        const playerInsertResults = await client.query(`
            INSERT INTO "players"
                ("first_name", "last_name", "team_id", "position_id", "created_by_user_id")
            VALUES
                ($1, $2, $3, $4, $5)
            RETURNING id;
            `, [firstName, lastName, team, position, createdByUserId]
        );
  
        // get this is the id from the above returned value
        const playerId = playerInsertResults.rows[0].id;
        // map through our playersRankings array to insert each host's player rank
        await Promise.all(rankingsToPass.map(ranking => {
            const sqlText = `
                INSERT INTO "playersRankings"
                    ("player_id", "user_id", "tier_id", "rank")
                VALUES
                    ($1, $2, $3, $4)
            `;
            const sqlParams = [
                playerId, ranking.hostId, ranking.newPlayerTier, ranking.newPlayerRank
            ];
            return client.query(sqlText, sqlParams);
        }));
  
        // const playersTagsInsertResults = await client.query(`
        //     INSERT INTO "playersTags"
        //         ("player_id", "tag_id")
        //     VALUES
        //         ($1, $2)
        //     `, [playerId, playersTag]
        // );
  
        await client.query('COMMIT');
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK');
        console.log('Error POST /api/player', error);
        res.sendStatus(500);
    } finally {
        client.release();
    }
});
 
router.delete('/:id', rejectUnauthenticated, async (req, res) => {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        // delete the info from the playersRankings table
        const playersRankingsDeleteResults = await client.query(`
                DELETE FROM "playersRankings"
                WHERE "player_id" = $1
            `, [req.params.id]
        );
        
        // then delete info from the playersTags table
        const playersTagsDeleteResults = await client.query(`
                DELETE FROM "playersTags"
                WHERE "player_id" = $1
            `, [req.params.id]
        );

        // then delete info from the players table
        const playersDeleteResults = await client.query(`
                DELETE FROM "players"
                WHERE "id" = $1
            `, [req.params.id]
        );

        await client.query('COMMIT');
        res.sendStatus(200);
    } catch (error) {
        await client.query('ROLLBACK');
        console.log('Error DELETE /api/player', error);
        res.sendStatus(500);
    } finally {
        client.release();
    }
});

module.exports = router;