import { Request, Response } from "express";
import StatusCodes from 'http-status-codes';
import Doctor from '../../../../model/doctor/doctor.model';
const deleteDoctor = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const doctor = await Doctor.findByIdAndDelete(id);
        if (!doctor) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Doctor doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Doctor has been deleted successfully!",
            doctor
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    deleteDoctor
}