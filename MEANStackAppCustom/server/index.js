const express = require('express');
const mongoose = require('./database/db');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transactionRoutes = require('./routes/transaction');

app.use('/transactions', transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});