import { Document, Types } from "mongoose";
export enum GenderStatus {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other',
}
export interface IPatientInterfac extends Document {
    DoctorId: Types.ObjectId;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: GenderStatus;
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
    contact: {
        phone: number;
        email: string;
    },
    emergencyContact: {
        name: string;
        relationship: string;
        phone: string;
    },
    insurance: {
        provider: string;
        policyNumber: string;
        coverageDetails: string;
    },
    medicalHistory: {
        allergies: string[];
        medications: string[];
        chronicConditions: string[];
        surgeries: {
            date: Date;
            type: string;
        }[],
        familyHistory: {
            relations: string;
            condtions: string;
        }[];
    },
    date: Date;
}