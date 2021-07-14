const express = require('express');
const router = express.Router();
require("dotenv").config();

router.get('/employee/all', (req, res) => {
  let query = "SELECT * FROM employee ORDER BY uid ASC";
  // execute query
  db.query(query, (err, result) => {
    if (err) {
      res.send({ error: result, error_msg: "query failed" });
    }
    res.send({ data: result })
  });
})

router.post('/employee/insert', (req, res) => {
  console.log(req.body)
  let Fname = req.body.Fname
  let Lname = req.body.Lname
  let ssn = req.body.ssn
  let bdate = req.body.bdate
  let sex = req.body.sex
  let salary = req.body.salary
  console.log(Fname + " " + Lname + " " + ssn + " " + bdate + " " + sex + " " + salary)
  let query = `INSERT INTO employee 
            (
              Fname, Lname, ssn, bdate, sex, salary
            )
            VALUES
            (
                ?, ?, ?, ?, ?, ?
            )`;
  db.query(query, [Fname, Lname, ssn, bdate, sex, salary], (err, data) => {
    if (err) {
      console.error(err)
      res.status(400).send('Some Error Occured')
    } else {
      console.log(data)
      res.status(201).send({ success: true })
    }
  });
})

router.post('/employee/update/:uid', (req, res) => {
  let Fname = req.body.Fname
  let Lname = req.body.Lname
  let ssn = req.body.ssn
  let bdate = req.body.bdate
  let sex = req.body.sex
  let salary = req.body.salary
  let uid = req.params.uid
  let query = `UPDATE employee set 
  Fname = ?, 
  Lname = ?, 
  ssn = ?, 
  bdate = ?, 
  sex = ?, 
  salary = ? 
  WHERE uid = ?`;
  db.query(query, [Fname, Lname, ssn, bdate, sex, salary, uid], (err, data) => {
    if (err) {
      console.error(err)
      res.status(400).send('Some Error Occured')
    } else {
      console.log(data)
      res.status(200).send({ success: true })
    }
  });
})

router.post('/employee/delete/:uid', (req, res) => {
  let uid = req.params.uid
  console.log(uid)
  let query = `DELETE FROM employee WHERE uid = ?`
  db.query(query, uid, (err, data) => {
    if (err) {
      console.error(err)
      res.status(400).send('Some Error Occured')
    } else {
      console.log(data)
      res.status(204).send({ success: true })
    }
  });
})
module.exports = router;
