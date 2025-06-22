import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import { bookedAnAppointment } from '../../service/impl/appointment/newAppointment/newAppointment.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateBookedAppointment } from '../../validator/validator';
import { bookedAppointments } from '../../service/impl/appointment/showAppointments/showAppointments.impl';
const router = express.Router();
router.post('/booked-appointment', authenticationToken, globalValidator(validateBookedAppointment), bookedAnAppointment);
router.get('/booked-appointments', authenticationToken, bookedAppointments)
export default router;