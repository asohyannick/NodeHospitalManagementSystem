import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import { addMedicalRecord } from '../../service/impl/medicalRecord/addMedicalRecord/addMedicalRecord.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateMedicalRecord } from '../../validator/validator';
const router = express.Router();
router.post('/add-medical-record', authenticationToken, globalValidator(validateMedicalRecord), addMedicalRecord);
export default router;