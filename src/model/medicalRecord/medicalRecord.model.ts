import mongoose, { Schema } from "mongoose";
import { IMedicalRecord } from "../../service/interfac/medicalRecord/medicalRecord.interfac";
const medicalRecordSchema: Schema = new Schema<IMedicalRecord>({
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
    labResults: {
        testName: {
            type: String,
            trim: true,
        },
        result: {
            type: String,
            trim: true,
        },
        date: {
            type: String,
            trim: true,
        },
        notes: {
            type: String,
            trim: true,
        },
    },
    visitDate: {
        type: String,
        trim: true,
    },
}, { timestamps: true });
const MedicalRecord = mongoose.model<IMedicalRecord>('MedicalRecord', medicalRecordSchema);
export default MedicalRecord;