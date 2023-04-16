import userModel from '../Models/UserModel.js';
import greviSchema from "../Models/Grevience.js";
import teacherSchema from '../Models/Teacher.js';


export const registerController = async (req,res) =>{

    try{

        const {name,email,password,username,role} = req.body;

        if(!name){
            return res.send({message:`Name is require`})
        }
        if(!email){
            return res.send({message:`email is require`})
        }
        if(!password){
            return res.send({message:`password is require`})
        }
        if(!username){
            return res.send({message:`Username is require`})
        }
        if(!role){
            return res.send({message:`Role is require`})
        }


        //existing user

        const user = await userModel.findOne({email})

        if(user){
            return res.status(200).send({
                success:false,
                message:'Already register please Login'
            })
        }


        const users = await new userModel({name,email,password,username,role}).save()
        res.status(201).send(
            users
        )


    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:`error in registertion`,
            error
        })
    }

}

//login
var userdata = new Object();

var teacherdata = new Object();


export const loginController = async(req,res)=>{

    try{
        const {username,password} = req.body;

        if(!username || !password){
            return res.status(404).send({
                success:false,
                message:"Invalid email or password"
            })
        }

        //check user

        const user = await userModel.findOne({username, password})

        userdata= user

        teacherdata = user


        if(!user){
            return res.status(404).send({
                success:false,
                message:"User is not register"
            })
        }

       
        res.status(200).send(
        
           
                user
            
        )

    }

    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:`error in login`,
            error
        })
}

}


export const SingleData = async (req,res)=>{
    try{
        res.status(200).send(

            userdata
  
         )
        
    }
    catch(err){
        res.status(500).send({
            success:false,
            err
        })
    }
}


//for student
export const SingleDataBYname = async (req,res)=>{
    try{

        const grevience = await greviSchema.find({name: userdata.name})
        res.status(200).send(
            grevience
        )

    }
    catch(err){
        res.status(500).send({
            success:false,
            err
        })
    }
}



//for student
export const SingleTeacher = async (req,res)=>{
    try{

        const teacher = await teacherSchema.find({name: teacherdata.name})
        res.status(200).send(
            teacher
        )

    }
    catch(err){
        res.status(500).send({
            success:false,
            err
        })
    }
}








