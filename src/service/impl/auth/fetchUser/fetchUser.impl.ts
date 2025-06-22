import Auth from "../../../../model/auth/auth.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const fetchUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const user = await Auth.findById(id);
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "User deson't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User has been retrieved successfully!",
            user
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong", error });
    }
}

export {
    fetchUser
}