import { UserDao } from '@daos';
import { logger } from '@shared';
import { Request, Response, Router, Express } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError } from '@shared';
import { ParamsDictionary } from 'express-serve-static-core';
import { TestController } from '../controllers/TestController';

const router = Router();
const userDao = new UserDao();

router.get('/test', async (req: Request, res: Response) => {
    try {
        const users = await userDao.getAll();
        let testcomn= new TestController()
        testcomn.TestFunction(req ,res)
        return res.status(OK).json({users});
    } catch (err) {
        logger.error(err.message, err);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

export default router;