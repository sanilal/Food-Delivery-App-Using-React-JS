import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";



// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection

connectDB();

app.get("/", (req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})

//mongodb+srv://tomatouser:oi6ErIabMCAUC2RC@cluster0.iprf463.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0