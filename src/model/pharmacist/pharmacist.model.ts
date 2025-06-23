import mongoose, { Schema } from "mongoose";
import { IPharmacist } from '../../service/interfac/pharmacist/pharmacist.interfac';
const pharmacistSchema: Schema = new Schema<IPharmacist>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    licenseNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    pharmacy: {
        type: Schema.ObjectId,
        ref: 'Pharmacy', // Reference to the Pharmacy model
        required: true,
    },
    zipCode: {
        type: String,
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
    salary: {
        type: Number,
    },
    country: {
        type: String,
        trim: true,
    },
}, { timestamps: true });

const Pharmacist = mongoose.model<IPharmacist>('Pharmacist', pharmacistSchema);

export default Pharmacist;