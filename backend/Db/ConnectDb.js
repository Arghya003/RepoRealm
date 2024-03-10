import mongoose from "mongoose"

export default async function connectDb(){
    try{
            await mongoose.connect(process.env.MONGO_URI)
            console.log("DataBase connected")
    }
    catch(e){
        console.log(`Error in Mongodb connection`,e.message)
    }
}