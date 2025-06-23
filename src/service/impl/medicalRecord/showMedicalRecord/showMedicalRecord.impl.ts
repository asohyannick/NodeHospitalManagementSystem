import { Request, Response } from "express";
import MedicalRecord from "../../../../model/medicalRecord/medicalRecord.model";
import { StatusCodes } from "http-status-codes";
const showMedicalRecord = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const medicalRecord = await MedicalRecord.findById(id);
        if (!medicalRecord) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Medical record doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Medical reocrd has been retrieved successfully!",
            medicalRecord
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showMedicalRecord
}