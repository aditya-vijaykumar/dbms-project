const express = require('express');
const router = express.Router();
require("dotenv").config();

router.get('/sailors/all', secured, (req, res) => {
  let query = "SELECT * FROM `sailors` ORDER BY sid ASC";
  // execute query
  db.query(query, (err, result) => {
    if (err) {
      res.send({ error: result, error_msg: "query failed" });
    }
    res.send({ data: result })
  });
})

module.exports = router;
