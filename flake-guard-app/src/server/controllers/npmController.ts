import {Request, Response, NextFunction} from 'express';
import {fakeData} from '../../client/components/Dashboard/fakeData';
import sql from '../../db/db.js';

const controller = {
  // Receives the results from the user via NPM package and caches the results
  async npmMetrics(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const {simple, user} = req.body;
      const tests = req.body.simple;

      if (user === 'temp') {
        res.locals.simple = simple;
        res.locals.user = user;
      }
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
      console.log('result -->', results);
      res.locals.metrics = results;

      // clear DB before storing results
      await sql`DELETE FROM "npmMetrics"`;

      // store results in DB
      for (let i = 0; i < results.length; i += 1) {
        await sql`INSERT INTO "npmMetrics" ("fullName", passed, failed)
        VALUES (${results[i].fullName}, ${results[i].passed}, ${results[i].failed})`;
      }

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

      // pull data from DB
      const resultsQuery =
        await sql`SELECT "fullName", passed, failed FROM "npmMetrics"`;

      // convert strings to numbers and add required results object keys
      for (let i = 0; i < resultsQuery.length; i += 1) {
        resultsQuery[i].passed = Number(resultsQuery[i].passed);
        resultsQuery[i].failed = Number(resultsQuery[i].failed);
        resultsQuery[i].totalRuns =
          resultsQuery[i].passed + resultsQuery[i].failed;

        // temporary placeholder
        resultsQuery[i].skipped = 0;
      }
      res.locals.dbMetrics = resultsQuery;

      return next();
    } catch (error) {
      console.log('ERROR', error);
    }
  },
};

export default controller;
