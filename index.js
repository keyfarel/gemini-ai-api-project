const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Gemini API server is running at http://localhost:${PORT}`);
});