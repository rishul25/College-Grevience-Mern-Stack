import mongoose from "mongoose";

const greviSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },

    uid:{
        type:String,
        required:true,
        unique:true
    },
    incharge:{
        type:String,
        required:true,
    },
    branch:{
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


export default mongoose.model("grevience",greviSchema)