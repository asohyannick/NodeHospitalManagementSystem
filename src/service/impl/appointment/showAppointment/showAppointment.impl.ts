import { Request, Response } from "express";
import Appointment from "../../../../model/appointment/appointment.model";
import { StatusCodes } from "http-status-codes";
const showAppointment = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const appointment = await Appointment.findById(id);
        if (!appointment) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Appointment doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Appointment has been retrieved successfully!",
            appointment
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showAppointment
}