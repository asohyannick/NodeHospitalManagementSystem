import { Document, Types } from "mongoose";
export enum BillingStatus {
    PAID = 'Paid',
    PENDING = 'Pending',
    CANCELLED = 'Cancelled',
    REFUNDED = 'Refunded',
}
export enum Currency {
    USD = 'usd',
    EURO = 'eur',
    GBP = 'gbp',
    AUD = 'aud',
    CAD = 'cad',
    INR = 'inr'
}

export interface Payment {
    transactionId: string;
    amount: number;
    method: string;
    status: BillingStatus;
    lastUpdated?: Date;
    currency: Currency;

}
export interface IPaymentInvoice extends Document {
    PatientId: Types.ObjectId; // Reference to the patient being billed
    items: {
        description: string;
        amount: number;
    }[]; // Array of items/services included in the bill
    totalAmount: number; // Total amount for the bill
    dueDate: string; // ISO 8601 format (YYYY-MM-DD)
    status: BillingStatus; // Bill status
    payment: Payment[];
}