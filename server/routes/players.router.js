const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const sqlText = `
    SELECT 
        "players"."first_name" as "firstName",
        "players"."last_name" as "lastName",
        "teams"."team_name" as "team",
        "positions"."position" as "position",
        ARRAY_AGG("playersRankings"."tier_id") as "tier",
        ARRAY_AGG("playersRankings"."rank") as "tierRank",
        "players"."created_by_user_id" as "addedBy"
    FROM "tiers"
    JOIN "playersRankings"
        ON "playersRankings"."tier_id" = "tiers"."id"
    JOIN "players"
        ON "players"."id" = "playersRankings"."player_id"
    JOIN "playersTags"
        ON "playersTags"."player_id" = "players"."id"
    JOIN "tags"
        ON "tags"."id" = "playersTags"."tag_id"
    JOIN "positions"
        ON "positions"."id" = "players"."position_id"
    JOIN "teams"
        ON "teams"."id" = "players"."team_id"
    JOIN "users"
        ON "users"."id" = "players"."created_by_user_id"
    GROUP BY "firstName", "lastName", "team", "position", "addedBy"
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

router.post('/', async (req, res) => {
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

        const playersTagsInsertResults = await client.query(`
            INSERT INTO "playersTags"
                ("player_id", "tag_id")
            VALUES
                ($1, $2)
            `, [playerId, playersTag]
        );

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

router.delete('/:id', (req, res) => {
    const sqlText = `
        DELETE FROM "tags"
        WHERE "id" = $1
    `;
    pool.query(sqlText, [req.params.id])
    .then((results) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('delete tag error', error);
        res.sendStatus(500);
    });
});

module.exports = router;