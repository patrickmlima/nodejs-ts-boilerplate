import { Application } from "express";

import defaultRoute from './controllers/default';

export default (appInstance: Application) => {
    appInstance.use('/api/', defaultRoute);
}