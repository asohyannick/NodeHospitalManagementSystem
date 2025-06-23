import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import { addNewPharmacy } from '../../service/impl/pharmacy/addPharmacy/addPharmacy.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateNewPharmacy } from '../../validator/validator';
const router = express.Router();
router.post('/add-new-pharmacy', authenticationToken, globalValidator(validateNewPharmacy), addNewPharmacy);
export default router;