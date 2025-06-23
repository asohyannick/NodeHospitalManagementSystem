import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import InventoryItem from "../../../../model/inventory/inventory.model";
const updateInventory = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
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
        const inventory = await InventoryItem.findByIdAndUpdate(id, {
            name,
            description,
            quantity,
            unit,
            price,
            category,
            supplier,
            expirationDate,
            reorderLevel,
        }, { new: true, runValidators: true });
        if (!inventory) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Inventory item doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Inventory has been updated successfully!",
            inventory
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    updateInventory
}