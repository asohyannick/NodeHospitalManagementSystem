import { Request, Response } from "express";
import Staff from "../../../../model/staff/staff.model";
import { StatusCodes } from "http-status-codes";
import { StaffJobRoleStatus } from "../../../interfac/staff/staff.interfac";
const updateStaffMember = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            name,
            phoneNumber,
            email,
            department,
        } = req.body;
        const staffMember = await Staff.findByIdAndUpdate(id, {
            name,
            role: StaffJobRoleStatus.NURSE,
            phoneNumber,
            email,
            department,
            hireDate: Date.now(),
        }, { new: true, runValidators: true });
        if (!staffMember) {
            return res.status(StatusCodes.NOT_FOUND).json({ success: false, message: "Staff member doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Staff member has been updated successfully!",
            staffMember
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

export default updateStaffMember;