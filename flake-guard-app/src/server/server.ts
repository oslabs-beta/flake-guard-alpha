import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
require('dotenv').config();
import resultsRouter from './routes/resultsRouter';
import userDashRouter from './routes/userDashRouter';
import tempDashRouter from './routes/tempDashRouter';
import {errorHandler} from './errors/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

// Default middleware
app.use(bodyParser.json({limit: '10mb'}));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client')));

// Endpoints
app.use('/results', resultsRouter);
app.use('/tempDash', tempDashRouter);
app.use('/userDash', userDashRouter);

// Catch all
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

// Global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(` 🚀 Server running on port ${PORT}`);
});
