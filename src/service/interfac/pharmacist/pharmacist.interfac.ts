import { Document, Types } from "mongoose";

export interface IPharmacist extends Document {
    name: string;               // Name of the pharmacist
    licenseNumber: string;      // License number of the pharmacist
    phoneNumber: string;        // Contact number for the pharmacist
    email: string;              // Email address of the pharmacist
    pharmacy:Types.ObjectId; // Reference to the pharmacy they work at
    zipCode: string;
    street: string;
    city: string;
    state: string;
    salary: number;
    country: string;
}