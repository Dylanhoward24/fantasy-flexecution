const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const sqlText = `
    SELECT * FROM "tiers"
    JOIN "playersRankings"
        ON "playersRankings"."tier_id" = "tiers"."id"
    JOIN "players"
        ON "players"."id" = "playersRankings"."player_id"
    JOIN "playersTags"
        ON "playersTags"."players_id" = "players"."id"
    JOIN "tags"
        ON "tags"."id" = "playersTags"."tags_id"
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

router.post('/', (req, res) => {
    // SQL text for the players table
    const playersSqlText = `
        INSERT INTO "players"
            ("first_name", "last_name", "team_id", "position_id", "created_by_user_id")
        VALUES
            ($1, $2, $3, $4, $5)
        RETURNING id
    `;
    const playersSqlParams = [
        req.body.newPlayer.firstName,
        req.body.newPlayer.lastName,
        req.body.newPlayer.team,
        req.body.newPlayer.position,
        req.body.newPlayer.createdByUserId
    ];
    // SQL text for the playersRankings table
    const playersRankingsSqlText = `
        INSERT INTO "playersRankings"
            ("user_id", "player_id", "tier_id", "rank")
        VALUES
            ($1, $2, $3, $4)
            ($5, $6, $7, $8)
    `;
    // SQL text for the playersTags table
    const playersTagsSqlText = `
        INSERT INTO "playersTags"
            ("tag_id", "player_id")
        VALUES
            ($1, $2)
    `;
    pool.query(playersSqlText, playersSqlParams)
        .then((results) => {
            let returnedId = results.id
            pool.query(
                playersRankingsSqlText, 
                [
                    // for host #1
                    req.body.rankingsToPass[0].hostId,
                    returnedId, // from the initial post
                    req.body.rankingsToPass[0].newPlayerTier,
                    req.body.rankingsToPass[0].newPlayerRank,
                    // for host #2
                    req.body.rankingsToPass[1].hostId,
                    returnedId,
                    req.body.rankingsToPass[1].newPlayerTier,
                    req.body.rankingsToPass[1].newPlayerRank,
                ]
            )
        .then((results) => {
            pool.query(
                playersTagsSqlText, 
                [
                    req.body.playersTag,
                    returnedId
                ]
            )
        })
        }).then((results) => {
            res.sendStatus(201);
        }).catch((err) => {
            console.log('post player failed!', err);
            res.sendStatus(500);
        });
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