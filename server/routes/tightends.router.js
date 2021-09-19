const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const sqlText = `
    SELECT
    "players"."id" as "playerId",
    "players"."first_name" as "firstName",
    "players"."last_name" as "lastName",
    "teams"."team_name" as "team",
    "positions"."position" as "position",
    "tags"."tag" as "tags",
    ARRAY_AGG("tiers"."tier_name") as "tierName"
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
    WHERE ("positions"."position" = 'TE')
    GROUP BY "playerId", "firstName", "lastName", "team", "position", "tags"
    ORDER BY "team" ASC, "firstName" ASC
    `;
    pool.query(sqlText)
    .then((dbRes) => {
        res.send(dbRes.rows)
    })
    .catch((error) => {
        console.log('get tight-ends error', error);
        res.sendStatus(500);
    });
});

router.get('/brett', (req, res) => {
    const sqlText = `
    SELECT
    "players"."id" as "playerId",
    "players"."first_name" as "firstName",
    "players"."last_name" as "lastName",
    "playersRankings"."rank" as "rank",
    "teams"."team_name" as "team",
    "positions"."position" as "position",
    "tiers"."order_on_list" as "tierOrder",
    "tags"."tag" as "tags"
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
    WHERE ("positions"."position" = 'TE') AND ("playersRankings"."user_id" = '14')
    GROUP BY "playerId", "firstName", "rank", "lastName", "team", "position", "tierOrder", "tags"
    ORDER BY "tierOrder" ASC, "rank" ASC
    `;
    pool.query(sqlText)
    .then((dbRes) => {
        res.send(dbRes.rows)
    })
    .catch((error) => {
        console.log('get quarterbacks error', error);
        res.sendStatus(500);
    });
});

router.get('/kyle', (req, res) => {
    const sqlText = `
    SELECT
    "players"."id" as "playerId",
    "players"."first_name" as "firstName",
    "players"."last_name" as "lastName",
    "playersRankings"."rank" as "rank",
    "teams"."team_name" as "team",
    "positions"."position" as "position",
    "tiers"."order_on_list" as "tierOrder",
    "tags"."tag" as "tags"
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
    WHERE ("positions"."position" = 'TE') AND ("playersRankings"."user_id" = '15')
    GROUP BY "playerId", "firstName", "rank", "lastName", "team", "position", "tierOrder", "tags"
    ORDER BY "tierOrder" ASC, "rank" ASC
    `;
    pool.query(sqlText)
    .then((dbRes) => {
        res.send(dbRes.rows)
    })
    .catch((error) => {
        console.log('get quarterbacks error', error);
        res.sendStatus(500);
    });
});

module.exports = router;