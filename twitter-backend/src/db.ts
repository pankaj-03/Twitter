import mongoose  from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//MongoUrl
const mongoUrl: string = process.env.MONGODB_URL as string;
const connectToDatabase = async ()=>{
        try{
         //Setup connection
         console.log("Connecting to DB");
         await mongoose.connect(mongoUrl);
         console.log("Connected to DB");
        
        }catch(error){
          console.log("DB connection failed :" , error);
          throw error;
        }
}

export default connectToDatabase;