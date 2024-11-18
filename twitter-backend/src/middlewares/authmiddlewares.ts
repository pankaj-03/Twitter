import {Request , Response , NextFunction} from 'express';
import jwt , { JwtPayload } from 'jsonwebtoken';

export function verifyToken(
    req: Request ,
    res: Response,
    next: NextFunction
){
     //extract token
     const token = req.headers.authorization?.split("")[1];
     
     //if token is invalid
     if(!token){
         res.status(401).json({message:"No Token recieved."});
         return;
     }
      
     //function to  verify the token using secret key
     jwt.verify(token , process.env.JWT_KEY as string,(err , decoded)=>{
          if(err){
            res.status(401).json({message: "Invalid Token"});
            return 
          }

          const username = (decoded as JwtPayload).username;
          if(!username){
            res.status(401).json({message : "Invalid Token"})
          }
          
          (req as any ).username = username;
          next();
     })
}