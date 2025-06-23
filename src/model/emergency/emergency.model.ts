import mongoose, { Schema } from "mongoose";
import { IEmergency, EmergencyStatus } from "../../service/interfac/emergency/emergency.interfac";
const emergencySchema: Schema = new Schema<IEmergency>({
    PatientId: {
        type: Schema.ObjectId,
        ref: 'Patient', // Reference to the Patient model
        required: true,
    },
    type: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        trim: true,
        enum: Object.values(EmergencyStatus),
        default: EmergencyStatus.PENDING,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const Emergency = mongoose.model<IEmergency>('Emergency', emergencySchema);

export default Emergency;