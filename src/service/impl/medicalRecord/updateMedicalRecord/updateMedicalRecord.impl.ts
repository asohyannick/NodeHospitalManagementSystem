import { Request, Response } from "express";
import MedicalRecord from "../../../../model/medicalRecord/medicalRecord.model";
import { StatusCodes } from "http-status-codes";
const updateMedicalRecord = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            medicalHistory,
            labResults,
            visitDate,
        } = req.body;
        const medicalRecord = await MedicalRecord.findByIdAndUpdate(id, 
            {
            medicalHistory,
            labResults,
            visitDate,
        }, { new: true, runValidators: true });
        if (!medicalRecord) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Medical record doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Medical record has been updated successfully!",
            medicalRecord
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    updateMedicalRecord
}