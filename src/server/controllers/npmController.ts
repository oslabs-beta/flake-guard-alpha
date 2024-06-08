import {Request, Response, NextFunction} from 'express';
import {fakeData} from '../fakeData';

const controller = {
  async npmMetrics(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const tests = fakeData[0].testResults[0]['assertionResults'];
      res.locals.metrics = [];

      for (let i = 0; i < tests.length; i++) {
        const ancestorTitles = tests[i].ancestorTitles;
        const duration = tests[i].duration;
        const fullName = tests[i].fullName;
        const status = tests[i].status;
        const title = tests[i].title;

        res.locals.metrics.push('TEST', i, [
          {
            ancestorTitles: ancestorTitles,
            duration: duration,
            fullName: fullName,
            status: status,
            title: title,
          },
        ]);
      }
      return next();
    } catch (error) 
      console.log('ERROR', error);
    }
  },
};

export default controller;
