const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// GET
router.get("/", (req, res) => {
  const sqlText = `SELECT * FROM "shopping" ORDER BY name ASC;`;

  pool
    .query(sqlText)
    .then((result) => {
      console.log(`Shopping list from database`, result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

// POST
router.post("/", (req, res) => {
  console.log("POST req.body", req.body);
  let queryText =
    'INSERT INTO "shopping" ("name", "quantity") VALUES ($1, $2);';
  pool
    .query(queryText, [req.body.name, req.body.quantity])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

// DELETE
router.delete("/:id", (req, res) => {
  const queryText = "DELETE FROM shopping WHERE id = $1";

  pool
    .query(queryText, [req.params.id])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.error("Could not delete shopping", err);
      res.sendStatus(500);
    });
});

module.exports = router;