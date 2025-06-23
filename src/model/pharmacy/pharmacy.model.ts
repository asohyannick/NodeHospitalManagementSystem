import mongoose, { Schema } from "mongoose";
import { IPharmacy } from '../../service/interfac/pharmacy/pharmacy.interfac';
const pharmacySchema: Schema = new Schema<IPharmacy>({
    name: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    operatingHours: {
        type: String,
        trim: true,
    },
    inventory: [{
        type: mongoose.Types.ObjectId,
        ref: 'InventoryItem', // Reference to the InventoryItem model
        required: true,

    }],
    pharmacistInCharge: {
        type: Schema.ObjectId,
        ref: 'Pharmacist', // Reference to the Pharmacist model
        required: true,
    },
}, { timestamps: true });

const Pharmacy = mongoose.model<IPharmacy>('Pharmacy', pharmacySchema);

export default Pharmacy;