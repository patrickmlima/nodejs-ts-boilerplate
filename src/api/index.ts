import { Application } from "express";

import defaultRoute from './controllers/default';
import docsRoute from './controllers/apiDocs';

export default (appInstance: Application) => {
    appInstance.use('/', defaultRoute);
    appInstance.use('/api-docs', docsRoute);
}