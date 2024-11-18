import express , {Express , Request , Response } from "express";
import connectToDatabase from "./db";
import dotenv from "dotenv";
dotenv.config();

// const app = express();
const app: Express = express();
const port = process.env.PORT;

connectToDatabase();

app.get('/' , async(req , res)=>{
   res.send('Express + Typscript Server');
   
});



app.listen(port , () => {
    console.log(`[server] : Server is running at https://localhost:${port}`);
})