import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import LabTechnician from "../../../../model/labTechnician/labTechnician.model";
const showLabTechnicians = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const labTechnicians = await LabTechnician.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Lab technicians have been retrieved successfully",
            labTechnicians
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export {
    showLabTechnicians
}