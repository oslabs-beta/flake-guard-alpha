import express from 'express';
import npmController from '../controllers/npmController';
import urlController from '../controllers/urlController';
import cacheController from '../controllers/cacheController';
import {Request, Response} from 'express';

const router = express.Router();

router.post(
  '/',
  npmController.npmMetrics,
  urlController.generateRandomString,
  cacheController.cacheTempResults,
  urlController.buildCustomUrl,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.tempUrl);
  }
);
// router.post('/', npmController.npmMetrics, (req: Request, res: Response) => {
//   console.log('im in the npm router');
//   return res.status(200).json(res.locals.metrics);
// });

router.get('/', npmController.npmFakeMetrics, (req: Request, res: Response) => {
  console.log('im in the npm router');
  return res.status(200).json(res.locals.dbMetrics);
});

// router.get('/:id', 
//   cacheController.retrieveResults,
//   (req: Request, res: Response) => {

//   }
// )
// router.get('/', npmController.verboseMetrics, (req: Request, res: Response) => {
//   console.log('im in the npm router');
//   return res.status(200).json(res.locals.metrics);
// });

export default router;
