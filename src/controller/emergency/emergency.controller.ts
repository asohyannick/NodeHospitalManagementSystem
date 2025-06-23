import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import addNewEmergencyCase from '../../service/impl/emergency/addEmergency/addEmergencyCase.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateNewEmergencyCase, validateNewUpdatedEmergencyCase } from '../../validator/validator';
import showEmergencyCases from '../../service/impl/emergency/showEmergencyCases/showEmergencyCases.impl';
import showEmergencyCase from '../../service/impl/emergency/showEmergency/showEmergencyCase.impl';
import updateEmergencyCase from '../../service/impl/emergency/updateEmergency/updateEmergencyCase.impl';
const router = express.Router();
router.post('/add-new-emergency-case', authenticationToken,globalValidator(validateNewEmergencyCase), addNewEmergencyCase);
router.get('/show-emergency-cases', authenticationToken, showEmergencyCases);
router.get('/show-emergency-case/:id', authenticationToken, showEmergencyCase);
router.put('/update-emergency-case/:id', authenticationToken, globalValidator(validateNewUpdatedEmergencyCase), updateEmergencyCase);

export default router;