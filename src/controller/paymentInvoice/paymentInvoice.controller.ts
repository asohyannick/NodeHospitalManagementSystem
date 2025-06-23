import express from 'express';
import { authenticationToken } from '../../middleware/auth/authenticationMiddleware';
import { createPaymentInvoice } from '../../service/impl/paymentInvoice/addPaymentInvoice/addPaymentInvoice.impl';
import globalValidator from '../../middleware/globalValidator/globalValidator';
import { validatePaymentInvoice } from '../../validator/validator';
import { showPaymentInvoices } from '../../service/impl/paymentInvoice/showPaymentInvoices/showPaymentInvoices.impl';
import { showPaymentInvoice } from '../../service/impl/paymentInvoice/showPaymentInvoice/showPaymentInvoice.impl';
const router = express.Router();
router.post('/create-payment-invoice', authenticationToken, globalValidator(validatePaymentInvoice), createPaymentInvoice);
router.get('/show-payment-invoices', authenticationToken, showPaymentInvoices);
router.get('/show-payment-invoice/:id', authenticationToken, showPaymentInvoice);

export default router;