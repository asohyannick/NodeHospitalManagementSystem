import { Request, Response } from "express";
import Appointment from "../../../../model/appointment/appointment.model";
import { StatusCodes } from "http-status-codes";
import { AppointmentStatus } from "../../../interfac/appointment/appointment.interfac";
const updateAppointment = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            appointmentDate,
            reason,
            notes,
        } = req.body;
        const appointment = await Appointment.findByIdAndUpdate(id, {
            appointmentDate,
            status: AppointmentStatus.COMPLETED,
            reason,
            notes,
            date: Date.now(),
        }, { new: true, runValidators: true });
        if (!appointment) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Appointment doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Appointment has been updated successfully!",
            appointment
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    updateAppointment
}