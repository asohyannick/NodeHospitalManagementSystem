import mongoose, { Schema } from "mongoose";
import { IInventoryItem } from '../../service/interfac/inventory/inventory.interfac';
const inventoryItemSchema: Schema = new Schema<IInventoryItem>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    quantity: {
        type: Number,
    },
    unit: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    supplier: {
        type: String,
        trim: true,
    },
    expirationDate: {
        type: Date,
        default: Date.now,
    },
    reorderLevel: {
        type: Number,
    },
}, { timestamps: true });

const InventoryItem = mongoose.model<IInventoryItem>('InventoryItem', inventoryItemSchema);

export default InventoryItem;