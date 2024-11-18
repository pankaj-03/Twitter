import mongoose , {Schema, StringExpressionOperatorReturningBoolean} from "mongoose";


export type IUser = {
   name: string;
   username: string;
   bio: string;
   email: string;
   emailVerified:  Date;
   coverImage: string;
   profileImage: string;
   hashedPassword: string;
   createdAt: Date;
   updatedAt: Date;
   followingIds: string[];
   hasNotification: boolean;

   post: Post[];
   comments: Comment[];
   notification: Notifiv

   

}


