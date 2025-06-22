import { Request, Response } from "express";
import Appointment from "../../../../model/appointment/appointment.model";
import { StatusCodes } from "http-status-codes";
import { AppointmentStatus } from "../../../interfac/appointment/appointment.interfac";
const bookedAppointment = async (req: Request, res: Response): Promise<Response> => {
    const {
        appointmentDate,
        reason,
        notes,
    } = req.body;
    try {
        const newAppointment = new Appointment({
            appointmentDate,
            status: AppointmentStatus.COMPLETED,
            reason,
            notes,
            date: Date.now(),
        });
        await newAppointment.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new appointment has been booked successfully!",
            newAppointment
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    bookedAppointment
}