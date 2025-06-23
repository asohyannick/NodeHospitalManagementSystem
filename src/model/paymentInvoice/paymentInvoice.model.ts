import mongoose, { Schema } from "mongoose";
import { BillingStatus, IPaymentInvoice, Currency } from "../../service/interfac/paymentInvoice/paymentInvoice.interfac";
const paymentInvoiceSchema: Schema = new Schema<IPaymentInvoice>({
    PatientId: {
        type: Schema.ObjectId,
        ref: 'Patient',
        required: true,
    },
    items:[{
        description: {
            type: String,
            trim: true,
        },
        amount: {
            type: Number,
        },
    }],
    totalAmount: {
        type: Number,
    },
    dueDate: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        trim: true,
        enum: Object.values(BillingStatus),
        default: BillingStatus.PENDING,
    },
    payment:[{
        transactionId: {
            type: String,
            trim: true,
        },
        amount: {
            type: Number,
        },
        method: {
            type: String,
            trim: true,
        },
        status: {
            type: String,
            trim: true,
            enum: Object.values(BillingStatus),
            default: BillingStatus.PENDING,
        },
        lastUpdated: {
            type: Date,
            default: Date.now,
        },
        currency: {
            type: String,
            trim: true,
            enum: Object.values(Currency),
            default: Currency.EURO,
        },

    }],
}, { timestamps: true });
const PaymentInvoice = mongoose.model<IPaymentInvoice>('PaymentInvoice', paymentInvoiceSchema);
export default PaymentInvoice;