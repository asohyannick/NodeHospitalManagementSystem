import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Pharmacy from "../../../../model/pharmacy/pharmacy.model";
const showPharmacy = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const pharmacy = await Pharmacy.findById(id);
        if (!pharmacy) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Pharmacy doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({ 
            success: true, 
            message: "Pharmacy has been retrieved successfully!", 
            pharmacy
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showPharmacy
}