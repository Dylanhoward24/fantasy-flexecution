const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const sqlText = `
        SELECT * FROM "comingUp"
    `;
    pool.query(sqlText)
    .then((dbRes) => {
        res.send(dbRes.rows)
    })
    .catch((error) => {
        console.log('get comingUp error', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    const sqlText = `
        INSERT INTO "comingUp"
            ("description")
        VALUES
            ($1)
    `;
    pool.query(sqlText, [req.body.description])
        .then((results) => {
            res.sendStatus(201);
        }).catch((err) => {
            console.log('post listenerRequest failed!', err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const sqlText = `
        DELETE FROM "comingUp"
        WHERE "id" = $1
    `;
    pool.query(sqlText, [req.params.id])
    .then((results) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('delete comingUp error', error);
        res.sendStatus(500);
    });
});

module.exports = router;