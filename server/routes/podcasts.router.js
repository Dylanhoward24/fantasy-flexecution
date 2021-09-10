const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const sqlText = `
        SELECT * FROM "podcasts"
    `;
    pool.query(sqlText)
    .then((dbRes) => {
        res.send(dbRes.rows)
    })
    .catch((error) => {
        console.log('get podcasts error', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    const sqlText = `
        INSERT INTO "podcasts"
            ("user_id", "image_source", "description")
        VALUES
            ($1, $2, $3)
    `;
    const sqlParams = [
        req.body.newPodcast.userId,
        req.body.newPodcast.imageSource,
        req.body.newPodcast.description,
    ];
    pool.query(sqlText, sqlParams)
        .then((results) => {
            res.sendStatus(201);
        }).catch((err) => {
            console.log('post listenerRequest failed!', err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const sqlText = `
        DELETE FROM "podcasts"
        WHERE "id" = $1
    `;
    pool.query(sqlText, [req.params.id])
    .then((results) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('delete podcasts error', error);
        res.sendStatus(500);
    });
});

module.exports = router;