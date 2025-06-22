import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Auth from "../../../../model/auth/auth.model";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    try {
        const user = await Auth.findOne({ email, isAdmin: true });
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({
                message: "User doesn't exist!"
            });
        }
        const matchedPassword = await bcrypt.compare(user.password, password);
        if (!matchedPassword) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid Credentails" });
        }
        const accessToken = jwt.sign({ id: user._id, email: user.email, password: user.password, isAdmin: user.isAdmin }, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '15m'
        });
        const refreshToken = jwt.sign({ id: user._id, email: user.email, password: user.password, isAdmin: user.isAdmin }, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '15m'
        });
        user.refreshToken = refreshToken;
        await user.save();
        res.cookie('auth', accessToken, {
            httpOnly: true,
            secure: process.env.JWT_SECRET_KEY as string === 'production',
            maxAge: 90000,
            sameSite: 'strict',
        });
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User has logged in successfully!",
            accessToken,
            refreshToken,
            user: user._id
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error
        })
    }
}

export {
    login
}