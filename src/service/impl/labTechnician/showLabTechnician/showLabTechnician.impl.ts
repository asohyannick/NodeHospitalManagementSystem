import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import LabTechnician from "../../../../model/labTechnician/labTechnician.model";
const showLabTechnician = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const labTechnician = await LabTechnician.findById(id);
        if (!labTechnician) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Lab technician doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Lab technician has been retrieved successfully!",
            labTechnician
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
    showLabTechnician
}