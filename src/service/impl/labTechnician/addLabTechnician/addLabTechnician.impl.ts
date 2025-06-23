import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import LabTechnician from "../../../../model/labTechnician/labTechnician.model";
const addNewLabTechnician = async (req: Request, res: Response): Promise<Response> => {
    const {
        name,
        licenseNumber,
        phoneNumber,
        email,
        street,
        city,
        zipCode,
        state,
        country,
    } = req.body;
    try {
        const newLabTechnician = new LabTechnician({
            name,
            licenseNumber,
            phoneNumber,
            email,
            street,
            city,
            zipCode,
            state,
            country,
        });
        await newLabTechnician.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new lab technician has been created successfully",
            newLabTechnician
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export {
    addNewLabTechnician
}