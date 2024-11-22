
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload, verify } from 'jsonwebtoken';

export function authmiddleware(req: Request, res: Response, next: NextFunction) {

  //extract token
  const token = req.headers.authorization?.split('')[1];
  
    //token is not recieved
    if (!token) {
      console.log("Token not recieved");
      res.status(401).json({ message: "No token is recieved" });
      return 
    }

     try{
         
         //verfify the token 
         const decode = jwt.verify(token , process.env.JWT_KEY as string);
         console.log(decode);
         (req as any).username = decode;
         next();

     }catch(error){
         res.status(401).json({error: "Invalid Token"});
     }
    
}
