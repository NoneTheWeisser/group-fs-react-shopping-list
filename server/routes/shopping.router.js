const express = require('express')
const pool = require('../modules/pool')
const router = express.Router()


// GET
router.get('/', (req, res) =>{
    const sqlText = `SELECT * FROM "shopping" ORDER by "id"'`

    pool.query(sqlText)
    .then((result) => {
        console.log(`Shopping list from database`, result.rows);
        res.send(result.rows );
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
    })
})

// POST


// DELETE


module.exports = router;