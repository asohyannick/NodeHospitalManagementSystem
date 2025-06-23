import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import InventoryItem from "../../../../model/inventory/inventory.model";
const addNewInventory = async (req: Request, res: Response): Promise<Response> => {
    const {
        name,
        description,
        quantity,
        unit,
        price,
        category,
        supplier,
        expirationDate,
        reorderLevel,
    } = req.body;
    try {
        const newInventory = new InventoryItem({
            name,
            description,
            quantity,
            unit,
            price,
            category,
            supplier,
            expirationDate,
            reorderLevel,
        });
        await newInventory.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new inventory has been added successfully",
            newInventory
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    addNewInventory
}