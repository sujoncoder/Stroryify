import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URL);
        if (db) {
            console.log("Database connection successfully...😎")
        }

    } catch (error) {
        console.log("Database connection failed...🔥")
    }
};

export default connectDB;