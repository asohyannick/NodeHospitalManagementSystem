import 'dotenv/config';
import mongoose from 'mongoose';
const MONGODB_CONNECTION: string = process.env.MONGODB_URI as string;
async function connectedToDB() {
    if (!MONGODB_CONNECTION) {
        console.log('Connection URL is undefined', MONGODB_CONNECTION);
        return
    }
    try {
        await mongoose.connect(MONGODB_CONNECTION);
        console.log('MongoDB connection is successful');
    } catch (error) {
        if (error instanceof Error) {
            console.error("Failed to connect to MongoDB", error.message);
        }
    }
}

export default connectedToDB;
