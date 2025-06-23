import mongoose, { Schema } from "mongoose";
import { ILaboratory, TestResultStatus } from "../../service/interfac/laboratory/laboratory.interfac";
const labSchema: Schema = new Schema<ILaboratory>({
    labTechnicianInCharge: {
        type: Schema.ObjectId,
        ref: 'LabTechnician', // Reference to the LabTechnician model
        required: true,
    },
    name: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    operatingHours: {
        type: String,
        trim: true,
    },
    testResult: {
        type: String,
        trim: true,
        enum: Object.values(TestResultStatus),
        default: TestResultStatus.NEUTRAL,
    },
}, { timestamps: true });

const Laboratory = mongoose.model<ILaboratory>('Laboratory', labSchema);

export default Laboratory;