import {Request, Response, NextFunction} from 'express';



const controller = {
    async npmMetrics(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            console.log('req.body --->', req.body);
            return next();
        } catch(error) {
            console.log('ERROR', error)
        }
    },

}

export default controller;