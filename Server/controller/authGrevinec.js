import greviSchema from "../Models/Grevience.js";



var userdata = new Object();
export const registerGrevince = async (req,res) =>{

    try{

        const {name,uid,incharge,branch,status,complain} = req.body;

        if(!name){
            return res.send({message:`Name is require`})
        }
        if(!uid){
            return res.send({message:`email is require`})
        }
        if(!incharge){
            return res.send({message:`password is require`})
        }
        if(!branch){
            return res.send({message:`Username is require`})
        }
        if(!complain){
            return res.send({message:`Role is require`})
        }
        
        //existing user

        const users = await new greviSchema({name,uid,incharge,branch,status,complain}).save()
        userdata = users

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



// export const SingleData = async (req,res)=>{
//     try{
//         res.status(200).send(
    
//             userdata
         
//          )
//     }
//     catch(err){
//         res.status(500).send({
//             success:false,
//             err
//         })
//     }
// }




export const AllData = async (req,res)=>{
    try{
        const user = await greviSchema.find({})

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



export const GetSingleINfo =  async (req, res) => {


    try{
        const user = await greviSchema.findById(req.params.id)
    
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
   
    

 export const DeleteInfo = async (req, res) => {

        

    try{
        const user = await greviSchema.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(500).send(
                {
                    success:false,
                    message:"grevience Not Found"
                }
            )
        }

        res.status(200).send({
            message:"Grevience Deleted"
        })
    

    }catch(er){
        res.status(500).send(e)
    }



    
    
}


export const EditInfo = async (req, res) => {
    let user = await greviSchema.findById(req.params.id)

    user = await greviSchema.findByIdAndUpdate(req.params.id, req.body,{new:true,useFindAndModify:true,runValidator:true})

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



