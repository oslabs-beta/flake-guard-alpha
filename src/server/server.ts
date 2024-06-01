import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
const app = express();
const PORT = 3000;
import npmRouter from '../server/routes/npm';

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client')));
app.use('/results', npmRouter);


app.listen(PORT, () => {
  console.log(` 🚀 Server running on port ${PORT}`);
});
