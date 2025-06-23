import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import { addNewInventory } from '../../service/impl/inventory/addInventory/addInventory.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateNewInventory } from '../../validator/validator';
const router = express.Router();
router.post('/add-new-inventory', authenticationToken, globalValidator(validateNewInventory), addNewInventory);
export default router;