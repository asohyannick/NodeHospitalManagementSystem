import { IAuthInterfac } from "../../service/interfac/auth/auth.interfac";
import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcryptjs';
const authSchema: Schema = new Schema<IAuthInterfac>({
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        trim: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    refreshToken: {
        type: String,
        trim: true,
    },
}, { timestamps: true });
authSchema.pre<IAuthInterfac>('save', async function (next) {
    if (!this.isModified('password')) return next;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
const Auth = mongoose.model<IAuthInterfac>('Auth', authSchema);
export default Auth;