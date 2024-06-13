import express from 'express';
// import tempCache from '../tempCache';
import {Request, Response} from 'express';

const router = express.Router();

router.get('/:id', (req: Request, res: Response) => {
  console.log(req.params);
  // console.log('simple result object', tempCache[req.params.id]);
  return res.status(200).json(res.locals.tempUrl);
});

export default router;
