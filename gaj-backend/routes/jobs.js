const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// API to get a list of jobs
router.get('/jobs', (req, res) => {
  db.query('SELECT * FROM jobs', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// API to get job details by ID
router.get('/jobs/:jobId', (req, res) => {
  const jobId = req.params.jobId;
  db.query('SELECT * FROM jobs WHERE id = ?', jobId, (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      res.status(404).json({ message: 'Job not found' });
    } else {
      res.json(results[0]);
    }
  });
});

module.exports = router;
