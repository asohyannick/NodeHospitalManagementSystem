import { Request, Response } from "express";
import MedicalRecord from "../../../../model/medicalRecord/medicalRecord.model";
import { StatusCodes } from "http-status-codes";
const addMedicalRecord = async (req: Request, res: Response): Promise<Response> => {
    const {
        medicalHistory,
        labResults,
        visitDate,
    } = req.body;
    try {
        const newMedicalRecord = new MedicalRecord({
            medicalHistory,
            labResults,
            visitDate,
        });
        await newMedicalRecord.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new medical reocrd has been created successfully!",
            newMedicalRecord
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    addMedicalRecord
}