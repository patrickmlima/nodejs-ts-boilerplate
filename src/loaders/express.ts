import bodyParser from "body-parser";
import { Application } from "express";

import routersLoader from '../api/index';

export default (appInstance: Application) => {
    appInstance.use(bodyParser.urlencoded({ extended: true }));
    appInstance.use(bodyParser.json());

    routersLoader(appInstance);
}