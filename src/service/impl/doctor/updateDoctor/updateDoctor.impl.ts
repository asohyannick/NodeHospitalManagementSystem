import { Request, Response } from "express";
import StatusCodes from 'http-status-codes';
import Doctor from '../../../../model/doctor/doctor.model';
import { DoctorGender } from "../../../interfac/doctor/doctor.interfac";
const updateDoctor = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
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
        const doctor = await Doctor.findByIdAndUpdate(id, {
            firstName,
            lastName,
            dateOfBirth,
            gender: DoctorGender.MALE,
            specialization,
            licenseNumber,
            address,
            contact,
            yearsOfExperience,
            languages,
            date: Date.now()
        }, { new: true, runValidators: true });
        if (!doctor) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Doctor doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Doctor has been updated successfully!",
            doctor
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    updateDoctor
}