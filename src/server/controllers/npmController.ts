import {Request, Response, NextFunction} from 'express';
import {fakeData} from '../../client/components/Dashboard/fakeData';
import sql from '../../db/db.js';

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
          totalTests: passed + failed,
        });
      }
      console.log('result -->', results);
      res.locals.metrics = results;

      // store results in DB
      await sql`INSERT INTO npmMetrics (fullName, passed, failed) VALUES
      (${results[0].fullName}, ${results[0].passed}, ${results[0].failed})`;

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
