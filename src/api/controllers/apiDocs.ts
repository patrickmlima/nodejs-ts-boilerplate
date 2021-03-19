import express, { Request, Response, Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import { getDocsAsObject } from '../../config/docs';

const router: Router = express.Router();

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(getDocsAsObject()));

export default router;