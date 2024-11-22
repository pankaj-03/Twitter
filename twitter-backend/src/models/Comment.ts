import mongoose , {Types , Model , Schema} from "mongoose";

//interface
export interface IComment {
    _id: Types.ObjectId,
    body: string,
    createdAt: Date,
    updatedAt: Date,
    userId: Types.ObjectId,
    postId: Types.ObjectId,

}

//schema

const commentSchema: Schema<IComment> = new mongoose.Schema({
    _id: {type: Schema.Types.ObjectId , required: true},
    body: {type: String},
    createdAt: {type: Date , default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    userId: {type: Schema.Types.ObjectId , ref: "User"},
    postId: {type: Schema.Types.ObjectId , ref: "Post"},
})

//export 
const Comment: Model<IComment> = mongoose.model("Comment" , commentSchema);
export default Comment;
