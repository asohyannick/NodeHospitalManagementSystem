import { Request, Response } from "express";
import Staff from "../../../../model/staff/staff.model";
import { StatusCodes } from "http-status-codes";
const showStaffMembers = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const staffMembers = await Staff.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Staff members have been retrieved successfully!",
            staffMembers
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default showStaffMembers;