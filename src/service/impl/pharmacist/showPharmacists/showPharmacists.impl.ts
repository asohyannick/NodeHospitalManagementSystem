import Pharmacist from "../../../../model/pharmacist/pharmacist.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const showPharmacists = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const pharmacists = await Pharmacist.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Pharmacists have retrieved from the database successfully!",
            pharmacists,
        });
    } catch (error) {
        console.error("Error adding new pharmacist:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

export default showPharmacists;