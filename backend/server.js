import express from "express"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import exploreRoutes from "./routes/exploreRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"
import connectDb from "./Db/ConnectDb.js"
import passport from "passport"
import session from "express-session"
import "./passport/passport.js"
dotenv.config()
const app=express();



app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

const PORT=4000||process.env.PORT;


app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/explore",exploreRoutes);





app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`)
    connectDb();
})