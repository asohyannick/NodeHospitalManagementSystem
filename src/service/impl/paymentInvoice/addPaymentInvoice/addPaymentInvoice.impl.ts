import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Stripe from 'stripe';
import PaymentInvoice from "../../../../model/paymentInvoice/paymentInvoice.model";
import { Currency, BillingStatus } from '../../../interfac/paymentInvoice/paymentInvoice.interfac';
import mongoose from "mongoose";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2025-05-28.basil',
});
const createPaymentInvoice = async (req: Request, res: Response): Promise<Response> => {
    const { items, totalAmount, dueDate, amount, currency } = req.body;
    try {
        const stripePaymentIntents = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method_types: ['card']
        });
        const newPayment = new PaymentInvoice({
            transactionId: stripePaymentIntents.id,
            items,
            totalAmount,
            dueDate,
            status: BillingStatus.PAID,
            amount,
            currency: Currency.USD,
        });
        await newPayment.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Payment invoice has been added successfully!",
            newPayment,
            clientSecret: stripePaymentIntents.client_secret,
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
    createPaymentInvoice
}