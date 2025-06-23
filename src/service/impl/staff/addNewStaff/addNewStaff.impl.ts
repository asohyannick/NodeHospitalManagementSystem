import { Request, Response } from "express";
import Staff from "../../../../model/staff/staff.model";
import { StatusCodes } from "http-status-codes";
import { StaffJobRoleStatus } from "../../../interfac/staff/staff.interfac";
const createNewStaffMember = async (req: Request, res: Response): Promise<Response> => {
    const {
        name,
        phoneNumber,
        email,
        department,
    } = req.body;
    try {
        const newStaff = new Staff({
            name,
            role: StaffJobRoleStatus.ADMINISTRATOR,
            phoneNumber,
            email,
            department,
            hireDate: Date.now(),
        });
        await newStaff.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new staff member as been added successfully!",
            newStaff
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

export default createNewStaffMember