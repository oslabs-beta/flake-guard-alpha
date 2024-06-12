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
      for (let i = 0; i < results.length; i++) {
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

      // pull data from DB and clear
      const resultsQuery = await sql`SELECT "fullName", passed, failed FROM "npmMetrics"`;
      console.log(resultsQuery);
      await sql`DELETE FROM "npmMetrics"`;
      const dbData = [];
      for (let i = 0; i < resultsQuery.length; i++) {
        dbData.push({
          fullName: resultsQuery[i].fullName,
          passed: resultsQuery[i].passed,
          failed: resultsQuery[i].failed,
        });
      }
      res.locals.dbMetrics = dbData;

      return next();
    } catch (error) {
      console.log('ERROR', error);
    }
  },
};

export default controller;
