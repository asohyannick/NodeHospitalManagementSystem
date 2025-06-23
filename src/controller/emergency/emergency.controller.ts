import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import addNewEmergencyCase from '../../service/impl/emergency/addEmergency/addEmergencyCase.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateNewEmergencyCase } from '../../validator/validator';
const router = express.Router();
router.post('/add-new-emergency-case', authenticationToken,globalValidator(validateNewEmergencyCase), addNewEmergencyCase);
export default router;