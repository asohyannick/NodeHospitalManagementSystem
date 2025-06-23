import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import InventoryItem from "../../../../model/inventory/inventory.model";
const deleteInventory = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const inventory = await InventoryItem.findByIdAndDelete(id);
        if (!inventory) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Inventory item doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Inventory has been deleted successfully!",
            inventory
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    deleteInventory
}