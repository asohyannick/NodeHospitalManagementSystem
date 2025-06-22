import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import { bookedAppointment } from '../../service/impl/appointment/newAppointment/newAppointment.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateBookedAppointment } from '../../validator/validator';
const router = express.Router();
router.post('/booked-appointment', authenticationToken, globalValidator(validateBookedAppointment), bookedAppointment);
export default router;