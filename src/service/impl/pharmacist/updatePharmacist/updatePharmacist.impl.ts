import Pharmacist from "../../../../model/pharmacist/pharmacist.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const updatePharmacist = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            name,
            licenseNumber,
            phoneNumber,
            email,
            zipCode,
            street,
            city,
            state,
            salary,
            country,
        } = req.body;
        const pharmacist = await Pharmacist.findByIdAndUpdate(id, {
            name,
            licenseNumber,
            phoneNumber,
            email,
            zipCode,
            street,
            city,
            state,
            salary,
            country,
        }, { new: true, runValidators: true });
        if (!pharmacist) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Pharmacist doesn't exist" })
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Pharmacist has been updated from the database successfully!",
            pharmacist,
        });
    } catch (error) {
        console.error("Error adding new pharmacist:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

export default updatePharmacist;