import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const db = await mongoose.connect("mongodb+srv://Storyify:iamsujonstoryify@next-dev.cezxodt.mongodb.net/Storiyfy");
        if (db) {
            console.log("Database connection successfully...😎")
        }

    } catch (error) {
        console.log("Database connection failed...🔥")
    }
};

export default connectDB;