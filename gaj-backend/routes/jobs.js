const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env

// Create a MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// API to get a list of jobs
router.get('/jobs', (req, res) => {
  db.query('SELECT * FROM openjobs WHERE isActive=1', (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Failed to fetch jobs', err });
    };
    res.json(results);
  });
});

// API to get job details by ID
router.get('/jobs/:jobId', (req, res) => {
  const jobId = req.params.jobId;
  db.query('SELECT * FROM openjobs WHERE id = ?', jobId, (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Failed to get job data', err });
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Job not found' });
    } else {
      res.json(results[0]);
    }
  });
});

// API to add job to DB when candidate apply for one
router.post('/apply', (req, res) => {
  const jobId = req.body.jobId;
  const candidateName = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  db.query(`INSERT INTO candidatejobportal (jobId, candidateName, phone, email) VALUES (${jobId}, ${candidateName}, ${phone}, ${email})`, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Failed to add job' });
    };
    res.json({ message: 'Job added successfully', jobId: result.insertId });
  });
});

module.exports = router;