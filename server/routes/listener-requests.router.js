const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const sqlText = `
    SELECT * FROM "listenerRequests"
`;
    pool.query(sqlText)
    .then((dbRes) => {
        res.send(dbRes.rows)
    })
    .catch((error) => {
        console.log('get listenerRequests error', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    const sqlText = `
        INSERT INTO "listenerRequests"
            ("user_id", "request_info")
        VALUES
            ($1, $2)
    `;
    const sqlParams = [
        req.user.id,
        req.body.requestInfo
    ];
    pool.query(sqlText, sqlParams)
        .then((results) => {
            res.sendStatus(201);
        }).catch((err) => {
            console.log('post listenerRequest failed!', err);
            res.sendStatus(500);
        });
});

module.exports = router;