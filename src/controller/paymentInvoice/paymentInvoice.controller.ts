import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import { createPaymentInvoice } from '../../service/impl/paymentInvoice/addPaymentInvoice/addPaymentInvoice.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validatePaymentInvoice } from '../../validator/validator';
const router = express.Router();
router.post('/create-payment-invoice', authenticationToken, globalValidator(validatePaymentInvoice), createPaymentInvoice);

export default router;