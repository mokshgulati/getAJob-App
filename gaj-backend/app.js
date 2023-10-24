const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Use the port specified in the .env file or default to 3000
const jobRoutes = require('./routes/jobs'); // Import the job-related routes

// Allow requests from frontend's origin (e.g., http://localhost:frontend_port)
const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Use the job-related routes
app.use('/api', jobRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});