import mongoose, { Schema } from "mongoose";
import { IAppointmentInterfac, AppointmentStatus } from "../../service/interfac/appointment/appointment.interfac";
const appointmentSchema: Schema = new Schema<IAppointmentInterfac>({
    PatientId: {
        type: Schema.ObjectId,
        ref: 'Patient',
        required: true,
    },
    DoctorId: {
        type: Schema.ObjectId,
        ref: 'Doctor',
        required: true,
    },
    appointmentDate: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        trim: true,
        enum: Object.values(AppointmentStatus),
        default: AppointmentStatus.SCHEDULED,
    },
    reason: {
        type: String,
        trim: true,
    },
    notes: {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
const Appointment = mongoose.model<IAppointmentInterfac>('Appointment', appointmentSchema);
export default Appointment;