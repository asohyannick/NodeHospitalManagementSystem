import mongoose, { Schema } from 'mongoose';
import { IStaff, StaffJobRoleStatus } from '../../service/interfac/staff/staff.interfac';
const staffSchema: Schema = new Schema<IStaff>({
    name: {
        type: String,
        trim: true,
    },
    role: {
        type: String,
        trim: true,
        enum: Object.values(StaffJobRoleStatus),
        default: StaffJobRoleStatus.TECHNICIAN,
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
    department: {
        type: String,
        trim: true,
    },
    hireDate: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const Staff = mongoose.model<IStaff>('Staff', staffSchema);

export default Staff;
