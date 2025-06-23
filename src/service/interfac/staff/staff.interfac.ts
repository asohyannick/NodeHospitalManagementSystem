import { Document } from 'mongoose';
export enum StaffJobRoleStatus {
    NURSE='Nurse',
    ADMINISTRATOR = 'Administrator',
    TECHNICIAN = 'Technician',
}
export interface IStaff extends Document {
    name: string;               // Name of the staff member
    role: string;               // Job role (e.g., Nurse, Administrator, Technician)
    phoneNumber: string;        // Contact number for the staff member
    email: string;              // Email address of the staff member
    department: string;         // Department where the staff member works
    hireDate: Date;             // Date the staff member was hired
}