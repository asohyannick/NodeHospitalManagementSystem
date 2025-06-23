import { Request, Response } from "express";
import Laboratory from "../../../../model/laboratory/laboratory.model";
import { StatusCodes } from "http-status-codes";
const showLabTests = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const labTests = await Laboratory.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Lab tests have been retrieved successfully!",
            labTests,
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
    showLabTests
}