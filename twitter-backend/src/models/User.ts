import mongoose , {Schema, Types , Model} from "mongoose";
import Post from "./Post";
import Comment from "./Comment";
import Notification from "./Notification";


export type IUser = {
   _id: Types.ObjectId,
   name: string,
   username: string,
   bio: string,
   email: string,
   emailVerified:  Date | null,
   coverImage: string,
   profileImage: string,
   password: string,
   createdAt: Date,
   updatedAt: Date,
   followingIds: string[],
   hasNotification: boolean,

   post: Types.ObjectId[],
   comments: Types.ObjectId[],
   notification: Types.ObjectId[],

}

//Schema 

const userSchema: Schema<IUser> = new mongoose.Schema({

   _id: {type: Schema.Types.ObjectId , default: () => new mongoose.Types.ObjectId()},
   name: {type: String , required: true},
   username: {type: String , required: true , unique: true},
   bio: {type: String },
   email: {type: String , required: true , unique: true},
   emailVerified: {type: Date , default: null},
   coverImage: {type: String },
   profileImage: {type: String },
   password: {type: String , required: true},
   createdAt: {type:Date , default: Date.now},
   updatedAt: {type: Date , default: Date.now},
   followingIds:{ type: [String]},
   hasNotification: {type: Boolean},
   post: [{ type: Schema.Types.ObjectId, ref: "Post" }],
   comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
   notification: [{ type: Schema.Types.ObjectId, ref: "Notification" }],
})

//export 

const User: Model<IUser> = mongoose.model("User" , userSchema);
export default User;


