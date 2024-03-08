import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import exploreRoutes from "./routes/exploreRoutes.js"
import cors from "cors"

dotenv.config()
const app=express();
app.use(cors());

const PORT=4000||process.env.PORT;

app.use("/api/users",userRoutes)
app.use("/api/explore",exploreRoutes);





app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`)
})