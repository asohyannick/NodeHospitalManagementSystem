import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Pharmacy from "../../../../model/pharmacy/pharmacy.model";
const showPharmacies = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const pharmacies = await Pharmacy.find();
        return res.status(StatusCodes.OK).json({ 
            success: true, 
            message: "Pharmacies have been retrieved successfully", 
            pharmacies
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showPharmacies
}