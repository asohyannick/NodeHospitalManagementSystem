import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload } from 'jsonwebtoken';
import Auth from "../../../../model/auth/auth.model";
const requestAccessToken = async (req: Request, res: Response): Promise<Response> => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: "Invalid Token" });
    }
    try {
        const userPayload = jwt.verify(refreshToken, process.env.JWT_SECRET_KEY as string) as JwtPayload;
        const user = await Auth.findById(userPayload.id);
        if (!user || refreshToken !== refreshToken) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Invalid Credentials" })
        }
        const newAccessToken = jwt.sign({ id: user._id, firstName: user.firstName, lastName: user.lastName, password: user.password, isAdmin: user.isAdmin }, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '7d'
        });
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "A new access token has been created for you!",
            newAccessToken
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    requestAccessToken
}