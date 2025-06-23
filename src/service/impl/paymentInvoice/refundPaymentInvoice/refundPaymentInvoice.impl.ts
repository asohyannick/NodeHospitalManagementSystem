import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Stripe from 'stripe';
import PaymentInvoice from "../../../../model/paymentInvoice/paymentInvoice.model";
import { BillingStatus, IPaymentInvoice } from '../../../interfac/paymentInvoice/paymentInvoice.interfac';
import mongoose from "mongoose";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2025-05-28.basil',
});
const refundPaymentInvoice = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        // Fecth the payment invoice from the database and cast it to paymentinvoice
        const paymentInvoice = await PaymentInvoice.findById(id) as IPaymentInvoice || null;
        // Accessing the last payment's transactionId
        const lastPayment = paymentInvoice.payment[paymentInvoice.payment.length - 1];
        // Check if payment invoice doesn't exist
        if (!paymentInvoice) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Payment invoice doesn't exist!"})
        }
        // Check if payment has already be refunded
        if (paymentInvoice.status === BillingStatus.REFUNDED) {
            return res.status(StatusCodes.BAD_REQUEST).json({message: "Payment Invoice has already been refunded!"})
        }
        // Now, Goahead and refund stripe payment
        const refund = await stripe.refunds.create({
            payment_intent: lastPayment.transactionId,
        });
        // Save the new status in the database after refunding
        paymentInvoice.status = BillingStatus.REFUNDED;
        await paymentInvoice.save();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Payment invoice has been refunded successfully!",
            refund
        });
    } catch (error) {
        console.error(error);
        // check if error is an instance of stripe API Error
        if (error instanceof Stripe.errors.StripeError) {
            return res.status(StatusCodes.BAD_REQUEST).json({message: error.message})
        }
        // Check if error is from MongoDB 
        if (error instanceof mongoose.Error) {
            return res.status(StatusCodes.BAD_REQUEST).json({message: error.message});
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    refundPaymentInvoice
}