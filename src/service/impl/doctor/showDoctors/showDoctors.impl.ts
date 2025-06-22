import { Request, Response } from "express";
import StatusCodes from 'http-status-codes';
import Doctor from '../../../../model/doctor/doctor.model';
const showDoctors = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const doctors = await Doctor.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Doctors have been retrieved successfully!",
            doctors
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showDoctors
}