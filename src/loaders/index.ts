import { Application } from "express";

import expressLoader from './express';

export default (appInstance: Application) => {
    expressLoader(appInstance);
}