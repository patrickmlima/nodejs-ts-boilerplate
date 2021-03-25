import express, { Request, Response, Router } from 'express';
import config from '../../config/env';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: 'NodeJS Typescript Boilerplate - Server is running',
        documentation: `http://${config.app.ip}:${config.app.port}/api-docs`
    });
});

export default router;