import express from 'express';
import { register } from '../../service/impl/auth/register/register.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validateUserRegisteration } from '../../validator/validator';
const router = express.Router();
router.post('/create-account', globalValidator(validateUserRegisteration), register);
export default router;