import mongoose, { Schema } from "mongoose";
import { ILabTechnician } from '../../service/interfac/labTechnician/labTechnician.interfac';
const labTechnicianSchema: Schema = new Schema<ILabTechnician>({
    LaboratoryId: {
        type: Schema.ObjectId,
        ref: 'Laboratory', // Reference to the Laboratory model
        required: true,
    },
    name: {
        type: String,
        trim: true,
    },
    licenseNumber: {
        type: String,
        unique: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    street: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    state: {
        type: String,
        trim: true,
    },
    zipCode: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

const LabTechnician = mongoose.model<ILabTechnician>('LabTechnician', labTechnicianSchema);

export default LabTechnician;