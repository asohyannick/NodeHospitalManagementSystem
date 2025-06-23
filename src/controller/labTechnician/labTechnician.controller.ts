import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import { addNewLabTechnician } from '../../service/impl/labTechnician/addLabTechnician/addLabTechnician.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateNewLabTechnician } from '../../validator/validator';
const router = express.Router();
router.post('/add-new-lab-technician', authenticationToken, globalValidator(validateNewLabTechnician), addNewLabTechnician);
export default router;