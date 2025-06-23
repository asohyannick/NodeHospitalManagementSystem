import Pharmacist from "../../../../model/pharmacist/pharmacist.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const addANewPharmacist = async (req: Request, res: Response): Promise<Response> => {
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

    try {
        const newPharmacist = new Pharmacist({
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
        });

        await newPharmacist.save();

        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new pharmacist has been added to our system successfully!",
            newPharmacist,
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

export default addANewPharmacist;