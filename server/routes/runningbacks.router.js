const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/brett', (req, res) => {
    const sqlText = `
    SELECT
    "players"."id" as "playerId",
    "players"."first_name" as "firstName",
    "players"."last_name" as "lastName",
    "teams"."team_name" as "team",
    "positions"."position" as "position",
    "tags"."tag" as "tags",
    "playersRankings"."tier_id" as "tier",
    "playersRankings"."rank" as "tierRank",
    "playersRankings"."user_id" as "hostId"
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
    WHERE (("playersRankings"."user_id" = '14') AND ("positions"."position" = 'RB'))
    GROUP BY "playerId", "firstName", "lastName", "team", "position", "tags", "tier", "tierRank", "hostId"
    ORDER BY "tier" ASC, "tierRank" ASC
    `;
    pool.query(sqlText)
    .then((dbRes) => {
        res.send(dbRes.rows)
    })
    .catch((error) => {
        console.log('get runningbacks error', error);
        res.sendStatus(500);
    });
});

router.get('/kyle', (req, res) => {
    const sqlText = `
    SELECT
    "players"."id" as "playerId",
    "players"."first_name" as "firstName",
    "players"."last_name" as "lastName",
    "teams"."team_name" as "team",
    "positions"."position" as "position",
    "tags"."tag" as "tags",
    "playersRankings"."tier_id" as "tier",
    "playersRankings"."rank" as "tierRank",
    "playersRankings"."user_id" as "hostId"
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
    WHERE (("playersRankings"."user_id" = '15') AND ("positions"."position" = 'RB'))
    GROUP BY "playerId", "firstName", "lastName", "team", "position", "tags", "tier", "tierRank", "hostId"
    ORDER BY "tier" ASC, "tierRank" ASC
    `;
    pool.query(sqlText)
    .then((dbRes) => {
        res.send(dbRes.rows)
    })
    .catch((error) => {
        console.log('get runningbacks error', error);
        res.sendStatus(500);
    });
});

module.exports = router;