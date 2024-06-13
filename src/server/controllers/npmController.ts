import {Request, Response, NextFunction} from 'express';
import {fakeData} from '../../client/components/Dashboard/fakeData';

const controller = {
  async npmMetrics(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const tests = req.body.simple;

      const results = [];
      for (const key in tests) {
        const fullName = key;
        const passed = tests[key].passed;
        const failed = tests[key].failed;

        results.push({
          fullName: fullName,
          passed: passed,
          failed: failed,
          totalRuns: passed + failed,
        });
      }
      console.log('resu;t -->', results);
      res.locals.metrics = results;
      //STORE RESULTS IN THE DB

      return next();
    } catch (error) {
      console.log('ERROR', error);
    }
  },
  async npmFakeMetrics(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const fakeMetrics = fakeData;

      res.locals.fakeMetrics = fakeMetrics;
      return next();
    } catch (error) {
      console.log('ERROR', error);
    }
  },
};

export default controller;
