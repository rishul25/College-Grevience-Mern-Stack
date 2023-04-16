import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    branch:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },

    status:{
        type:String,
        default: "Pending",
    },
   
    complain:{
        type:String,
        required:true,
    }


})


export default mongoose.model("teacher",teacherSchema)