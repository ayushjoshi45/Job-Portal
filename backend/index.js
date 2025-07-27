import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import appllicationRoute from "./routes/application.route.js"
dotenv.config({});
const app=express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption={
    origin:'http://localhost:5173/',
    Credential:true,
}
app.use(cors(corsOption));

// API 
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",appllicationRoute);

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`);
    connectDB();
})