import { Document, Types } from "mongoose";
export enum EmergencyStatus {
    ONGOING = 'Ongoing',
    RESOLVED = 'Resolved',
    PENDING = 'Pending',
}
export interface IEmergency extends Document {
    PatientId: Types.ObjectId; // Reference to the patient involved in the emergency
    type: string;                        // Type of emergency (e.g., Cardiac Arrest, Accident)
    description: string;                 // Detailed description of the emergency                        
    status: EmergencyStatus;
    date: Date; 
}