import { Document, Types } from "mongoose";
export interface IPharmacy extends Document {
    name: string;               // Name of the pharmacy
    location: string;           // Physical address of the pharmacy
    phoneNumber: string;        // Contact number for the pharmacy
    operatingHours: string;     // Operating hours (e.g., "Mon-Fri: 8 AM - 8 PM")
    inventory: Types.ObjectId[]; // References to inventory items
    pharmacistInCharge:Types.ObjectId; // Reference to the pharmacist in charge
}
