import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const notFoundRouteHandler = async(_req: Request, res: Response): Promise<Response> => {
    const message: string = "Route doesn't exit";
    try {
        return res.status(StatusCodes.NOT_FOUND).json({
            success: false,
            message,
            status: StatusCodes.NOT_FOUND,
        });
    } catch (error) {
        console.error("Error occured in notFoundRoute", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!", 
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export {
    notFoundRouteHandler
}