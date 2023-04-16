import teacherSchema from "../Models/Teacher.js";




export const registerTeacher = async (req,res) =>{

    try{

        const {name,branch,subject,status,complain} = req.body;

        if(!name){
            return res.send({message:`Name is require`})
        }
       
        if(!subject){
            return res.send({message:`Subject is require`})
        }
        if(!branch){
            return res.send({message:`Branch is require`})
        }
        if(!complain){
            return res.send({message:`Complain is require`})
        }
        
        //existing user

        const users = await new teacherSchema({name,subject,branch,status,complain}).save()

        res.status(201).send(
            users
        )


    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:`error in Complian`,
            error
        })
    }

}



export const AllTeacher = async (req,res)=>{
    try{
        const teacher = await teacherSchema.find({})
        res.status(200).send(
            teacher
        )
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:`error in Tecaher`,
            error
        })
    }
}


export const DeleteInfo = async (req, res) => {

    try{
        const user = await teacherSchema.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(500).send(
                {
                    success:false,
                    message:"Teacher Not Found"
                }
            )
        }

        res.status(200).send({
            message:"Teacher Deleted"
        })
    

    }catch(er){
        res.status(500).send(e)
    }

    
}


export const GetSingleINfos =  async (req, res) => {


    try{
        const user = await teacherSchema.findById(req.params.id)
    
        res.status(200).send(
            user
        )
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:`error in Complian`,
            error
        })
    }
}



export const EditInfos = async (req, res) => {
    let user = await teacherSchema.findById(req.params.id)

    user = await teacherSchema.findByIdAndUpdate(req.params.id, req.body,{new:true,useFindAndModify:true,runValidator:true})

    if(!user){
        return res.status(500).send(
            {
                success:false,
                message:"Complain  Not Found"
            }
        )
    }

    res.status(200).send(
        user
    )
    
}



   