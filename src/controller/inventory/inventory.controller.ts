import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import { addNewInventory } from '../../service/impl/inventory/addInventory/addInventory.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateNewInventory, validateNewlyUpdatedInventory } from '../../validator/validator';
import { showInventories } from '../../service/impl/inventory/showInventories/showInventories.impl';
import { showInventory } from '../../service/impl/inventory/showInventory/showInventory.impl';
import { updateInventory } from '../../service/impl/inventory/updateInventory/updateInventory.impl';
import { deleteInventory } from '../../service/impl/inventory/deleteInventory/deleteInventory.impl';
const router = express.Router();
router.post('/add-new-inventory', authenticationToken, globalValidator(validateNewInventory), addNewInventory);
router.get('/show-inventories', authenticationToken, showInventories);
router.get('/show-inventory/:id', authenticationToken, showInventory);
router.put('/update-inventory/:id', authenticationToken, globalValidator(validateNewlyUpdatedInventory), updateInventory);
router.delete('/delete-inventory/:id', authenticationToken, deleteInventory);
export default router;