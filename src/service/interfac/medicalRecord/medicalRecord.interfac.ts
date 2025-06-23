import { Document, Types } from 'mongoose';
export interface IMedicalRecord extends Document {
    PatientId: Types.ObjectId; // Reference to the patient
    DoctorId: Types.ObjectId; // Reference to the doctor who created the record
    medicalHistory: {
        allergies: string[];
        medications: string[];
        chronicConditions: string[];
        surgeries: {
            date: string; // ISO 8601 format (YYYY-MM-DD)
            type: string;
        }[];
        familyHistory: {
            relation: string;
            condition: string;
        }[];
    }; // Patient's medical history
    labResults?: {
        testName: string;
        result: string;
        date: string;
        notes: string;
    }[]; // Array of lab results
    visitDate: string; // ISO 8601 format (YYYY-MM-DD)
}