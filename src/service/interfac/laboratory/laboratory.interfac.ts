import { Document, Types } from 'mongoose';
export enum TestResultStatus {
    POSITIVE = 'Positive',
    NEGATIVE = 'Negative',
    NEUTRAL = 'Neutral',
}
export interface ILaboratory extends Document {
    labTechnicianInCharge: Types.ObjectId; // Reference to the technician in charge
    name: string;               // Name of the lab
    location: string;           // Physical address of the lab
    phoneNumber: string;        // Contact number for the lab
    operatingHours: string;     // Operating hours (e.g., "Mon-Fri: 8 AM - 8 PM")
    testResult: TestResultStatus;
}