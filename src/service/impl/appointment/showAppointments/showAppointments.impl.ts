import { Request, Response } from "express";
import Appointment from "../../../../model/appointment/appointment.model";
import { StatusCodes } from "http-status-codes";
const bookedAppointments = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const appointments = await Appointment.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Appointments have been retrieved successfully!",
            appointments
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    bookedAppointments
}