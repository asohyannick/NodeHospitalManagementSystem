import { Request, Response } from "express";
import MedicalRecord from "../../../../model/medicalRecord/medicalRecord.model";
import { StatusCodes } from "http-status-codes";
const showMedicalRecords = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const medicalRecords = await MedicalRecord.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Medical reocrds have been retrieved successfully!",
            medicalRecords
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showMedicalRecords
}