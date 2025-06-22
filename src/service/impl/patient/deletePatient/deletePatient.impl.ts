import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Patient from "../../../../model/patient/patient.model";
const deletePatient = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const patient = await Patient.findByIdAndDelete(id);
        if (!patient) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Patient doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Patient has been deleted successfully!",
            patient
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
    deletePatient
}