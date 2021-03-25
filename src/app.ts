import express from 'express';

import config from './config/env';
import initLoaders from './loaders/index';

const app = express();

initLoaders(app);

app.listen(config.app.port, () => {
    console.log('Server is up NOW');
});

export default app;