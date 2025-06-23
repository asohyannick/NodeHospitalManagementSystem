import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Emergency from "../../../../model/emergency/emergency.model";
const showEmergencyCase = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const emergencyCase = await Emergency.findById(id);
        if (!emergencyCase) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Something went wrong!",
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Emergency case has been retrieved successfully from the database!",
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

export default showEmergencyCase;