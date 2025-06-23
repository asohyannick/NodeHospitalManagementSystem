import 'dotenv/config';
import express, { Application } from 'express';
import morgan from 'morgan';
import connectedToDB from './config/databaseConfig/databaseConfig';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import authRoute from './controller/auth/auth.controller';
import patientRoute from './controller/patient/patient.controller';
import appointmentRoute from './controller/appointment/appointment.controller';
import doctorRoute from './controller/doctor/doctor.controller';
import medicalRecordRoute from './controller/medicalRecord/medicalRecord.controller';
import paymentInvoiceRoute from './controller/paymentInvoice/paymentInvoice.controller';
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const APP_NAME: string = process.env.APP_NAME || 'NodeHospitalManagementSystem';
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
// Routes
app.use(`/api/${API_VERSION}/auth`, authRoute);
app.use(`/api/${API_VERSION}/patient`, patientRoute);
app.use(`/api/${API_VERSION}/appointment`, appointmentRoute);
app.use(`/api/${API_VERSION}/doctor`, doctorRoute);
app.use(`/api/${API_VERSION}/medical-record`, medicalRecordRoute);
app.use(`/api/${API_VERSION}/payment-invoice`, paymentInvoiceRoute);


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
