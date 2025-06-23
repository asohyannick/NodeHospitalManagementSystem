import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Pharmacy from "../../../../model/pharmacy/pharmacy.model";
const addNewPharmacy = async (req: Request, res: Response): Promise<Response> => {
    const {
        name,
        location,
        phoneNumber,
        operatingHours,
    } = req.body;
    try {
        const newPharmacy = new Pharmacy({
            name,
            location,
            phoneNumber,
            operatingHours,
        });
        await newPharmacy.save();
        return res.status(StatusCodes.CREATED).json({ success: true, message: "A new pharmacy has been added successfully", newPharmacy })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    addNewPharmacy
}