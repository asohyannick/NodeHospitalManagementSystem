import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Patient from "../../../../model/patient/patient.model";
import { GenderStatus } from "../../../interfac/patient/patient.interfac";
const updatePatient = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            firstName,
            lastName,
            dateOfBirth,
            address,
            contact,
            emergencyContact,
            insurance,
            medicalHistory,
        } = req.body;
        const patient = await Patient.findByIdAndUpdate(id, {
            firstName,
            lastName,
            dateOfBirth,
            gender: GenderStatus.FEMALE,
            address,
            contact,
            emergencyContact,
            insurance,
            medicalHistory,
            date: Date.now(),
        }, { new: true, runValidators: true });
        if (!patient) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Patient doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Patient has been updated successfully!",
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
    updatePatient
}