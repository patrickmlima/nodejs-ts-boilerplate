import path from 'path'
import dotenv from 'dotenv';

import { AppConfig } from './config.interface';

const dotenvPath: string = path.join(process.cwd(), '.env');

dotenv.config({ path:  dotenvPath});

const development: AppConfig = {
    app: {
        port: process.env.DEV_PORT || ''
    }
}

const production: AppConfig = {
    app: {
        port: process.env.PORT || ''
    }
}

const selectConfig = (): AppConfig => {
    const envValue: string = process.env.NODE_ENV || 'development';

    if (envValue === 'production') {
        return production;
    }
    return development;
}

export default selectConfig();