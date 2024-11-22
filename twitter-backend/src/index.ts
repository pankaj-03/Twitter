import express, { Express, Request, Response } from "express";
import connectToDatabase from "./db";
import User, { IUser } from "./models/User";
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
import { authmiddleware } from "./middlewares/authmiddlewares";
dotenv.config();


// const app = express();
const app: Express = express();
const port = process.env.PORT;
app.use(express.json());

connectToDatabase();

app.get('/', async (req, res) => {
    res.send('Express + Typscript Server');

});


app.post('/', authmiddleware, async (req, res) => {
    console.log('Received data:', req.body);
    const data: IUser = req.body;
    try {
        console.log(data);
        const newUser = new User(data);
        const response = await newUser.save();
        console.log(response);
         res.status(200).json({ message: "User Created: ", response });
         return;
    } catch (error) {
        console.log("Error occured :", error);
        res.status(500).json({ message: "Internal Server Error", error });
        return 
    }
})

app.post('/signup', async (req: Request, res: Response) => {
    const { username, name, email, password  } = req.body;
    const data = req.body;
    console.log(data);

    if (!username || !name || !email || !password) {
        res.status(401).json({ message: "All fields are required" });
        return;
    }

    try{
         const userExist = await User.findOne({email: email});
         if(userExist){
                   //  HTTP code 409 indicate conflict
                   res.status(409).json({message: "User already exist"});
                   return;
         }
       
            const hashedPassword = await bcrypt.hash(password , 10);
            const newUser = new User({name , username , email , password: hashedPassword});
            const response = await newUser.save();
            res.status(201).json({message: "User created successfully"});
            return ;
        
    }catch(error){
        console.log("Error during signup :", error);
        res.status(500).json({message: "Internal Server Error"});
    }
})


app.listen(port, () => {
    console.log(`[server] : Server is running at https://localhost:${port}`);
})