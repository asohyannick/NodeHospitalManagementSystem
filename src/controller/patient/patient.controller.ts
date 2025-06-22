import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import { addPatient } from '../../service/impl/patient/newPatient/newPatient.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateAddedPatientRequest } from '../../validator/validator';
const router = express.Router();
router.post('/add-patient', authenticationToken, globalValidator(validateAddedPatientRequest), addPatient);
export default router;