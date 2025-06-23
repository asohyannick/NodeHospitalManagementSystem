import { Request, Response } from "express";
import Laboratory from "../../../../model/laboratory/laboratory.model";
import { StatusCodes } from "http-status-codes";
const showLabTest = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const labTest = await Laboratory.findById(id);
        if (!labTest) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: "Lab test doesn't exist!",
            });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Lab test has been retrieved successfully!",
            labTest,
        });
    } catch (error) {
        console.error(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wwrong!",
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
}

export {
    showLabTest
}