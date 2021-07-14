const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

//Express app init
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'aditya',
  password: 'avk123',
  database: 'dbms_project'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
})
global.db = db;

// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Routes
app.use('/app', require('./routes/app.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT} `));
