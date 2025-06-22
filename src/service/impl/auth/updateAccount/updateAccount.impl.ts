import Auth from "../../../../model/auth/auth.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            firstName,
            lastName,
            email,
            password,
        } = req.body;
        const user = await Auth.findByIdAndUpdate(id, {
            firstName,
            lastName,
            email,
            password,
            isAdmin: true,
        }, { new: true, runValidators: true });
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "User deson't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User's account has been updated successfully!",
            user
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong", error });
    }
}

export {
    updateUser
}