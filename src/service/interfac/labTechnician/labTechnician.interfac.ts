import { Document, Types } from "mongoose";

export interface ILabTechnician extends Document {
    LaboratoryId: Types.ObjectId;
    name: string;               // Name of the lab technician
    licenseNumber: string;      // License number of the technician
    phoneNumber: string;        // Contact number for the technician
    email: string;              // Email address of the technician
    street: string;             // Street address of the technician
    city: string;               // City address of the technician
    zipCode: string;            // Zip code address of the technician
    state: string;              // State address of the technician
    country: string;            // Country address of the technician
}