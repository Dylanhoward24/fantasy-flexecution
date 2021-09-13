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
    const sqlText = `
        INSERT INTO "players"
            ("first_name", "last_name", "team_id", "position_id", "created_by_user_id")
        VALUES
            ($1, $2, $3, $4, $5)
    `;
    const sqlParams = [
        req.body.firstName,
        req.body.lastName,
        req.body.team,
        req.body.position,
        req.body.createdByUserId
    ];
    pool.query(sqlText, sqlParams)
        .then((results) => {
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