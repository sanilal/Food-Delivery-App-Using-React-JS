import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://tomatouser:oi6ErIabMCAUC2RC@cluster0.iprf463.mongodb.net/food-del').then(()=>{
        console.log("DB Connected");
    })
}