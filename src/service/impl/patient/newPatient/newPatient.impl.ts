import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Patient from "../../../../model/patient/patient.model";
import { GenderStatus } from "../../../interfac/patient/patient.interfac";
const addPatient = async (req: Request, res: Response): Promise<Response> => {
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
    try {
        const newPatient = new Patient({
            firstName,
            lastName,
            dateOfBirth,
            gender: GenderStatus.MALE,
            address,
            contact,
            emergencyContact,
            insurance,
            medicalHistory,
            date: Date.now(),
        });
        await newPatient.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new patient has been added successfully!",
            newPatient
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
    addPatient
}