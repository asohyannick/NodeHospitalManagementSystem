import { Request, Response } from "express";
import StatusCodes from 'http-status-codes';
import Doctor from '../../../../model/doctor/doctor.model';
import { DoctorGender } from "../../../interfac/doctor/doctor.interfac";
const addADoctor = async (req: Request, res: Response): Promise<Response> => {
    const {
        firstName,
        lastName,
        dateOfBirth,
        specialization,
        licenseNumber,
        address,
        contact,
        yearsOfExperience,
        languages,
    } = req.body;
    try {
        const newDoctor = new Doctor({
            firstName,
            lastName,
            dateOfBirth,
            gender: DoctorGender.FEMALE,
            specialization,
            licenseNumber,
            address,
            contact,
            yearsOfExperience,
            languages,
            date: Date.now()
        });
        await newDoctor.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new doctor has been added successfully!",
            newDoctor
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    addADoctor
}