import express from 'express';
import npmController from '../controllers/npmController';
import {Request, Response} from 'express';

const router = express.Router();

router.get('/', npmController.npmMetrics, (req: Request, res: Response) => {
  console.log('im in the npm router');
  return res.status(200).json('hello from the npm router');
});

export default router;
