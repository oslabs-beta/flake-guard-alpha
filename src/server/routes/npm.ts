import express from 'express';
import npmController from '../controllers/npmController';
import {Request, Response} from 'express';

const router = express.Router();

router.post('/', npmController.npmMetrics, (req: Request, res: Response) => {
  console.log('im in the npm router');
  return res.status(200).json(res.locals.metrics);
});

router.get('/', npmController.npmFakeMetrics, (req: Request, res: Response) => {
  console.log('im in the npm router');
  return res.status(200).json(res.locals.dbMetrics);
});
// router.get('/', npmController.verboseMetrics, (req: Request, res: Response) => {
//   console.log('im in the npm router');
//   return res.status(200).json(res.locals.metrics);
// });

export default router;
