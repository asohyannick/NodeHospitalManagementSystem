import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Emergency from "../../../../model/emergency/emergency.model";
import { EmergencyStatus } from "../../../interfac/emergency/emergency.interfac";
const updateEmergencyCase = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            type,
            description,
        } = req.body;
        const emergencyCase = await Emergency.findByIdAndUpdate(id, {
            type,
            description,
            status: EmergencyStatus.ONGOING,
            date: Date.now(),
        }, { new: true, runValidators: true });
        if (!emergencyCase) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Something went wrong!",
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Emergency case has been updated successfully from the database!",
            emergencyCase
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : 'Unknown Error',
        })
    }
}

export default updateEmergencyCase;