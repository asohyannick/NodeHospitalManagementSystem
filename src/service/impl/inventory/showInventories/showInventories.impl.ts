import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import InventoryItem from "../../../../model/inventory/inventory.model";
const showInventories = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const inventories = await InventoryItem.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Inventories have been retrieved successfully!",
            inventories
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong!", error });
    }
}

export {
    showInventories
}