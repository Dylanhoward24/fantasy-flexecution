const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
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