import mongoose, { Schema } from "mongoose";
import { IPatientInterfac, GenderStatus } from "../../service/interfac/patient/patient.interfac";
const patientSchema: Schema = new Schema<IPatientInterfac>({
    DocterId: {
        type: Schema.ObjectId,
        ref: 'Docter',
        required: true,
    },
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
        enum: Object.values(GenderStatus),
        default: GenderStatus.FEMALE,
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
    emergencyContact: {
        name: {
            type: String,
            trim: true,
        },
        relationship: {
            type: String,
            trim: true,
        },
        phone: {
            type: String,
            trim: true,
        },
    },
    insurance: {
        provider: {
            type: String,
            trim: true,
        },
        policyNumber: {
            type: String,
            trim: true,
        },
        coverageDetails: {
            type: String,
            trim: true,
        },
    },
    medicalHistory: {
        allergies: {
            type: [String],
            trim: true,
        },
        medications: {
            type: [String],
            trim: true,
        },
        chronicConditions: {
            type: [String],
            trim: true,
        },
        surgeries: {
            date: {
                type: Date,
                default: Date.now,
            },
            type: {
                type: String,
                trim: true,
            },
        },
        familyHistory: {
            relations: {
                type: String,
                trim: true,
            },
            conditions: {
                type: String,
                trim: true,
            },
        },
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });
const Patient = mongoose.model<IPatientInterfac>('Patient', patientSchema);
export default Patient;