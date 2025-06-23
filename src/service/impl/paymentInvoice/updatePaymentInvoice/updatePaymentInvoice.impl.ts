import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Stripe from "stripe";
import PaymentInvoice from "../../../../model/paymentInvoice/paymentInvoice.model";
import { BillingStatus, Currency } from "../../../interfac/paymentInvoice/paymentInvoice.interfac";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2025-05-28.basil',
});
const updatePaymentInvoice = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { items, totalAmount, dueDate, amount, currency } = req.body;
        const stripePaymentIntents = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method_types: ['card']
        });
        const paymentInvoice = await PaymentInvoice.findByIdAndUpdate(id, {
            transactionId: stripePaymentIntents.id,
            items,
            totalAmount,
            dueDate,
            status: BillingStatus.PAID,
            amount,
            currency: Currency.AUD,
        }, { new: true, runValidators: true });
        if (!paymentInvoice) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Payment invoice doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Payment invoice has been updated successfully!",
            paymentInvoice
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    updatePaymentInvoice
}