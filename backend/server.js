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
import path, { dirname } from "path"

dotenv.config()
const app=express();

const PORT = process.env.PORT || 4000;

const __dirname=path.resolve("/RepoRealm")
console.log(__dirname)

app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());



app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/explore",exploreRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});



app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`)
    connectDb();
})