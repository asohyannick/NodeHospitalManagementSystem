import mongoose, { Schema } from "mongoose";
import { IDoctor, DoctorGender } from "../../service/interfac/doctor/doctor.interfac";
const doctorSchema: Schema = new Schema<IDoctor>({
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    dateOfBirth: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
        enum: Object.values(DoctorGender),
        default: DoctorGender.MALE,
    },
    specialization: {
        type: String,
        trim: true,
    },
    licenseNumber: {
        type: String,
        trim: true,
    },
    address: {
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
    },
    contact: {
        phone: {
            type: Number,
        },
        email: {
            type: String,
            trim: true,
        },
    },
    yearsOfExperience: {
        type: Number,
    },
    languages: {
        type: [String],
        trim: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
const Doctor = mongoose.model<IDoctor>('Doctor', doctorSchema);
export default Doctor;