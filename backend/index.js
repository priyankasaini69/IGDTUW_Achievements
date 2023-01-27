import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";



//db connection
const app = express();
dotenv.config();

mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("MongoDB connected")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
});

//middleware

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/post", postRouter);


app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500 ;
    const errorMessage = err.message || "Something went wrong" ;
    return res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    });
});


app.listen(process.env.PORT , ()=>{
    connect()
    console.log("Listening PORT...")
})
