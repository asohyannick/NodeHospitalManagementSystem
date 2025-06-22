import { Document, Types } from "mongoose";
export enum AppointmentStatus {
    SCHEDULED = 'Schedulded',
    COMPLETED = 'Completed',
    CANCELLED = 'Cancelled',
    NO_SHOW = 'No Show',
}
export interface IAppointmentInterfac extends Document {
    PatientId: Types.ObjectId;
    DoctorId: Types.ObjectId;
    appointmentDate: string;
    status: AppointmentStatus;
    reason: string;
    notes?: string;
    date: Date;
}