import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const backendErrorHandler = async(_req: Request, res: Response): Promise<Response> => {
    const message: string = "Internal Server Error";
    try {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message,
            status: StatusCodes.INTERNAL_SERVER_ERROR,
        });
    } catch (error) {
        console.error("Error occured on the backend", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!", 
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export {
    backendErrorHandler
}