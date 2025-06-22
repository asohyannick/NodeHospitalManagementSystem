import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import { addADoctor } from '../../service/impl/doctor/addDoctor/addDoctor.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateAddADoctorRequest } from '../../validator/validator';
const router = express.Router();
router.post('/add-doctor', authenticationToken, globalValidator(validateAddADoctorRequest), addADoctor);
export default router;