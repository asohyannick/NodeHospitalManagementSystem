import { Document } from "mongoose";
export interface IInventoryItem extends Document {
    name: string;               // Name of the medical item
    description?: string;       // Description of the item
    quantity: number;           // Quantity in stock
    unit: string;               // Unit of measurement (e.g., pieces, boxes, liters)
    price: number;              // Price per unit
    category: string;           // Category of the item (e.g., medications, supplies)
    supplier: string;           // Supplier of the item
    expirationDate?: Date;      // Expiration date for medications
    reorderLevel: number;       // Minimum quantity before reorder is needed
}