import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import { addNewLabTechnician } from '../../service/impl/labTechnician/addLabTechnician/addLabTechnician.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateNewLabTechnician, validateNewUpdatedLabTechnician } from '../../validator/validator';
import { showLabTechnicians } from '../../service/impl/labTechnician/showLabTechnicians/showLabTechnicians.impl';
import { showLabTechnician } from '../../service/impl/labTechnician/showLabTechnician/showLabTechnician.impl';
import { updateLabTechnician } from '../../service/impl/labTechnician/updateLabTechnician/updateLabTechnician.impl';
const router = express.Router();
router.post('/add-new-lab-technician', authenticationToken, globalValidator(validateNewLabTechnician), addNewLabTechnician);
router.get('/show-lab-technicians', authenticationToken, showLabTechnicians);
router.get('/show-lab-technician/:id', authenticationToken, showLabTechnician);
router.put('/update-lab-technician/:id', authenticationToken, globalValidator(validateNewUpdatedLabTechnician),updateLabTechnician);

export default router;