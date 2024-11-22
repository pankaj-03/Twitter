import mongoose  , {Types , Schema , Model} from "mongoose";

//Interface for post
export interface IPost {
    _id: Types.ObjectId,
    body: Types.ObjectId,
    createdAt: Date,
    updatedAt: Date,
    userId: Types.ObjectId,
    likedIds: string[],
    comments: string[],
}

//schema

const postSchema: Schema<IPost> = new mongoose.Schema({
    _id: {type: Schema.Types.ObjectId , required: true},
    body: {type: Schema.Types.ObjectId , required: true},
    createdAt: {type: Date , required: true},
    updatedAt:{ type:Date , required: true},
    userId: {type: Schema.Types.ObjectId , ref: "User"},
    likedIds: {type: [String] },
    comments: [String],
})


//export

const Post: Model<IPost> = mongoose.model("Post" , postSchema);
export default Post;
