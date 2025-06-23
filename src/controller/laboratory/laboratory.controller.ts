import express from "express";
import { authenticationToken } from "../../middleware/auth/authenticationMiddleware";
import { createNewLabTest } from "../../service/impl/laboratory/addLaboratory/addLaboratory.impl";
import globalValidator from "../../middleware/globalValidator/globalValidator";
import { validateLabTestCreation } from "../../validator/validator";
const router = express.Router();
router.post('/create-lab-test', authenticationToken, globalValidator(validateLabTestCreation), createNewLabTest);
export default router;