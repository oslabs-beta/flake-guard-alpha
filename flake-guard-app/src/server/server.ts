import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
require('dotenv').config();
const app = express();
import npmRouter from './routes/npm';
import tempDashRouter from './routes/tempDashRouter';

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({limit: '10mb'}));
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/results', npmRouter);

app.use('/tempDash', tempDashRouter);

app.listen(PORT, () => {
  console.log(` 🚀 Server running on port ${PORT}`);
});
