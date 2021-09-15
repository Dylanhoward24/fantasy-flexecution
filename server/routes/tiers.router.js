const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const sqlText = `
    SELECT * FROM "tiers"
    `;
    pool.query(sqlText)
    .then((dbRes) => {
        res.send(dbRes.rows)
    })
    .catch((error) => {
        console.log('get tiers error', error);
        res.sendStatus(500);
    });
});

module.exports = router;