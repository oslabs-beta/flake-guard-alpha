import sql from '../../server/db/db';
import dbController, { DBController } from '../../server/controllers/dbController';
import CustomError from '../../server/errors/CustomError';

jest.mock('../../server/db/db', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('dbController', () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = { params: {}, body: {} };
    res = { locals: {} };
    next = jest.fn();
    sql.mockClear();
  });

  describe('retrieveResults', () => {
    it('should retrieve results and call next', async () => {
      const userId = 'testUserId';
      const mockResults = [{ id: 1, score: 100 }, { id: 2, score: 95 }];
      sql.mockResolvedValueOnce(mockResults);

      req.params.userId = userId;
      await dbController.retrieveResults(req, res, next);

      expect(res.locals.results).toEqual(mockResults);
      expect(next).toHaveBeenCalled();
    });

    it('should call next with a CustomError on database query failure', async () => {
      const userId = 'testUserId';
      const mockError = new Error('Database query error');
      sql.mockRejectedValueOnce(mockError);

      req.params.userId = userId;
      await dbController.retrieveResults(req, res, next);

      expect(next).toHaveBeenCalledWith(expect.any(CustomError));
      expect(next.mock.calls[0][0].status).toBe(500);
      expect(next.mock.calls[0][0].log).toBe('ERROR---> Database query in retrieveResults failed: \n');
    });
  });

  describe('saveResults', () => {
    it('should save results to database and call next', async () => {
      const userId = 'testUserId';
      const mockResults = [{ id: 1, score: 100 }, { id: 2, score: 95 }];
      req.params.userId = userId;
      req.body.results = mockResults;

      sql.mockResolvedValueOnce({});

      await dbController.saveResults(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    it('should call next with a CustomError on database query failure', async () => {
      const userId = 'testUserId';
      const mockResults = [{ id: 1, score: 100 }, { id: 2, score: 95 }];
      const mockError = new Error('Database query error');
      sql.mockRejectedValueOnce(mockError);

      req.params.userId = userId;
      req.body.results = mockResults;

      await dbController.saveResults(req, res, next);

      expect(next).toHaveBeenCalledWith(expect.any(CustomError));
      expect(next.mock.calls[0][0].status).toBe(500);
      expect(next.mock.calls[0][0].log).toBe('ERROR---> Database query in saveResults failed: \n');
    });
  });
});