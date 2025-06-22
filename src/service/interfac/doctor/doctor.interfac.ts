import { Document } from "mongoose";
export enum DoctorGender {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other',
}
export interface IDoctor extends Document {
    firstName: string;
    lastName: string;
    dateOfBirth: string; // ISO 8601 format (YYYY-MM-DD)
    gender: DoctorGender;
    specialization: string; // Area of medical expertise
    licenseNumber: string; // Medical license number
    address:{
        street: string;
        city: string;
        state:string;
        zipCode: string;
        country: string;
    }; // Home address of the doctor
    contact:{
        phone: string;
        email: string;
    }; // Contact information
    yearsOfExperience: number; // Years of practice
    languages: string[]; // Languages spoken
    date: Date;
}