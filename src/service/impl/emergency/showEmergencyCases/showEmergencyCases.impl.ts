import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Emergency from "../../../../model/emergency/emergency.model";
const showEmergencyCases = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const emergencyCases = await Emergency.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Emergency cases have been retrieved successfully from the database system!",
            emergencyCases
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

export default showEmergencyCases;