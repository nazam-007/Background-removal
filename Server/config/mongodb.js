// import FormData from 'form-data';
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MongoDB_URL = process.env.MONGO_URI;

const connectDB=async()=>{

    mongoose.connection.on('connected',()=>{
        console.log('Database connected');
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)
}

export default connectDB

// const connectDB = async () => {
//     try {
//         await mongoose.connect(`${MONGO_URI}/bg-removal`)

//         console.log("✅ MongoDB Connected Successfully!");
//     } catch (error) {
//         console.error("❌ MongoDB Connection Error:", error);
//         process.exit(1);
//     }
// };

//export default connectDB;