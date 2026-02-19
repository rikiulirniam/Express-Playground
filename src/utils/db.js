import mongoose from "mongoose";

const  connectDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
    } catch (err){
        console.log("Error connecting to MongoDB:", err.message);
    }
}

export default connectDB;