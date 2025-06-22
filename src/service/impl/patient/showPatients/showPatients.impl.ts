import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Patient from "../../../../model/patient/patient.model";
const showPatients = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const patients = await Patient.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Patients have been retrieved successfully!",
            patients
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error
        });
    }
}

export {
    showPatients
}