import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import addANewPharmacist from '../../service/impl/pharmacist/addPharmacist/addNewPharmacist.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateNewlyUpdatedPharmacist,validateNewPharmacist } from '../../validator/validator';
import showPharmacists from '../../service/impl/pharmacist/showPharmacists/showPharmacists.impl';
import showPharmacist from '../../service/impl/pharmacist/showPharmacist/showPharmacist.impl';
import updatePharmacist from '../../service/impl/pharmacist/updatePharmacist/updatePharmacist.impl';
const router = express.Router();
router.post('/add-new-pharmacist', authenticationToken, globalValidator(validateNewPharmacist), addANewPharmacist);
router.get('/show-pharmacists', authenticationToken, showPharmacists);
router.get('/show-pharmacist/:id', authenticationToken, showPharmacist);
router.put('/update-pharmacist/:id', authenticationToken, globalValidator(validateNewlyUpdatedPharmacist), updatePharmacist);

export default router;