import { Request, Response } from "express";
import Laboratory from "../../../../model/laboratory/laboratory.model";
import { StatusCodes } from "http-status-codes";
import { TestResultStatus } from "../../../interfac/laboratory/laboratory.interfac";
const createNewLabTest = async (req: Request, res: Response): Promise<Response> => {
    const {
        name,
        location,
        phoneNumber,
        operatingHours
    } = req.body;
    try {
        const newLab = new Laboratory({
            name,
            location,
            phoneNumber,
            operatingHours,
            testResult:TestResultStatus.POSITIVE,
        });
        await newLab.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new lab test has been created successfully!",
            newLab,
        });
    } catch (error) {
        console.error(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wwrong!",
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
}

export {
    createNewLabTest
}