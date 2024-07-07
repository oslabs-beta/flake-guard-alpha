import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
require('dotenv').config();
const app = express();
import resultsRouter from './routes/resultsRouter';
import tempDashRouter from './routes/tempDashRouter';
import dbRouter from './routes/dbRouter';
// import dashboardRouter from './routes/dashboardRouter';

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({limit: '10mb'}));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/results', resultsRouter);

app.use('/tempDash', tempDashRouter);

app.use('/db', dbRouter);

// app.use('/dashboard', dashboardRouter);

app.listen(PORT, () => {
  console.log(` 🚀 Server running on port ${PORT}`);
});
