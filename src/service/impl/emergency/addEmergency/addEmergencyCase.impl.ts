import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Emergency from "../../../../model/emergency/emergency.model";
import { EmergencyStatus } from "../../../interfac/emergency/emergency.interfac";
const addNewEmergencyCase = async (req: Request, res: Response): Promise<Response> => {
    const {
        type,
        description,
    } = req.body;
    try {
        const newEmergencyCase = new Emergency({
            type,
            description,
            status: EmergencyStatus.RESOLVED,
            date: Date.now(),
        });
        await newEmergencyCase.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new emergency case has been added successfully to our system!",
            newEmergencyCase
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

export default addNewEmergencyCase;