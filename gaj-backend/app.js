const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const jobRoutes = require('./routes/jobs');

app.use(express.json());

app.use('/api', jobRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
