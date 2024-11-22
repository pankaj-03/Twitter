import mongoose , {Model , Schema , Types} from "mongoose";

//interface 

export interface INotification {
    _id: Types.ObjectId,
    body: string,
    createdAt: Date,
    userId: Types.ObjectId,
}

//schema
const notificationSchema: Schema<INotification> = new mongoose.Schema({
    _id: {type: Schema.Types.ObjectId , required: true},
    body: {type: String , required: true},
    createdAt: {type:Date , required: true},
    userId: {type: Schema.Types.ObjectId , ref: "User"},
})

//export 
const Notification: Model<INotification> = mongoose.model("Notification" , notificationSchema);
export default Notification;