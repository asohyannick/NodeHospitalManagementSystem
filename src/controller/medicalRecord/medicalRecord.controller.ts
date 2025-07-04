import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import { addMedicalRecord } from '../../service/impl/medicalRecord/addMedicalRecord/addMedicalRecord.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateMedicalRecord, validateUpdatedMedicalRecord } from '../../validator/validator';
import { showMedicalRecords } from '../../service/impl/medicalRecord/showMedicalRecords/showMedicalRecords.impl';
import { showMedicalRecord } from '../../service/impl/medicalRecord/showMedicalRecord/showMedicalRecord.impl';
import { updateMedicalRecord } from '../../service/impl/medicalRecord/updateMedicalRecord/updateMedicalRecord.impl';
import { deleteMedicalRecord } from '../../service/impl/medicalRecord/deleteMedicalRecord/deleteMedicalRecord.impl';
const router = express.Router();
router.post('/add-medical-record', authenticationToken, globalValidator(validateMedicalRecord), addMedicalRecord);
router.get('/show-medical-records', authenticationToken, showMedicalRecords);
router.get('/show-medical-record/:id', authenticationToken, showMedicalRecord);
router.put('/update-medical-record/:id', authenticationToken, globalValidator(validateUpdatedMedicalRecord), updateMedicalRecord);
router.delete('/delete-medical-record/:id', authenticationToken, deleteMedicalRecord);
export default router