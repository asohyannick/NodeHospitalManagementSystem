import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import PaymentInvoice from "../../../../model/paymentInvoice/paymentInvoice.model";
const showPaymentInvoices = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const paymentInvoices = await PaymentInvoice.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Payment invoices have retrieved successfully!",
            paymentInvoices
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showPaymentInvoices
}