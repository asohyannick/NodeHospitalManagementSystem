import 'dotenv/config';
import express, { Application, Request, Response} from 'express';
import morgan from 'morgan';
import connectedToDB from './config/databaseConfig/databaseConfig';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const APP_NAME: string = process.env.APP_NAME || 'NodeHospitalManagementSystemAPI';
const APP_PORT: string | number = parseInt(process.env.APP_PORT || '8080', 10);
const API_VERSION: string | number = process.env.API_VERSION || 'v1';
const APP_HOST: string = process.env.APP_HOST || 'localhost';
if (process.env.NODE_ENV as string === 'development') {
    app.use(morgan('dev'));
}
// Security middleware packages 
app.use(cors({
    origin: process.env.CLIENT_SIDE as string || '*',
    credentials: true,
}));
app.use(compression());
app.use(helmet());
app.get('/test', (_req: Request, res: Response) => {
  res.status(200).json({message: "hello from our express.js server"});
})
async function serve() {
    try {
        await connectedToDB(),
            app.listen(APP_PORT, () => {
                console.log(`Backend Server is running on ${APP_HOST}: on port ${APP_PORT} on api/${API_VERSION} owned by ${APP_NAME}...`);
            });

    } catch (error) {
        console.error(error);
    }
}
serve();
