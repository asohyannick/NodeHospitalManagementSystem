import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import PaymentInvoice from "../../../../model/paymentInvoice/paymentInvoice.model";
const showPaymentInvoice = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const paymentInvoice = await PaymentInvoice.findById(id);
        if (!paymentInvoice) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Payment invoice doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Payment invoice has been retrieved successfully!",
            paymentInvoice
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showPaymentInvoice
}