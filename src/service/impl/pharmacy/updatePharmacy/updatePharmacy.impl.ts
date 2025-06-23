import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Pharmacy from "../../../../model/pharmacy/pharmacy.model";
const updatePharmacy = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            name,
            location,
            phoneNumber,
            operatingHours,
        } = req.body;
        const pharmacy = await Pharmacy.findByIdAndUpdate(id, {
            name,
            location,
            phoneNumber,
            operatingHours,
        }, { new: true, runValidators: true });
        if (!pharmacy) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Pharmacy doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Pharmacy has been updated successfully!",
            pharmacy
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    updatePharmacy
}