import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import addANewPharmacist from '../../service/impl/pharmacist/addPharmacist/addNewPharmacist.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateNewPharmacist } from '../../validator/validator';
const router = express.Router();
router.post('/add-new-pharmacist', authenticationToken, globalValidator(validateNewPharmacist), addANewPharmacist);
export default router;