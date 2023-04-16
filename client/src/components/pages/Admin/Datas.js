import React,{useState,useEffect}  from "react";
import { useNavigate } from 'react-router-dom';

const Datas = () => {
  const navigate = useNavigate()

  const LoadDetails=(_id)=>{

   navigate(`/infos/${_id}`)
    

  }


  function handleClick() {
   
    navigate('/resolver')
  }


    const[gets,setGets] = useState(null)

    useEffect(()=>{
        fetch("http://localhost:8080/api/v1/teacher/getTeacher").then((res)=>{
          return res.json();
        }).then((resp)=>{
          setGets(resp); 
        }).catch((err)=>{
          console.log(err);
        })
    
      },[])

      const RemoveDetails = (_id)=>{

        if(window.confirm('Do You want to remove ?')){
          fetch("http://localhost:8080/api/v1/teacher/"+_id,{
            method:"DELETE"
          }).then((res)=>{
    
            alert("Removed Succesfully!")
            window.location.reload();
    
          }).catch((err)=>{
            console.log(err.message)
          })
    
        }
    
      }


   

  return (
    <div className=" w-3/4 h-[95vh] bg-gray-300 ml-12 rounded-md shadow-md">
      <section className="container mx-auto p-6 font-mono  ">
        <div className="w-full mb-8  h-[90vh]  rounded-lg shadow-lg overflow-y-scroll">
          <div className="w-full overflow-y-auto ">
          <table class="w-full">
        <thead class="bg-gray-50 border-b-2 border-gray-200">
        <tr>

          <th class="p-3 text-lg text-bold-500 font-semibold tracking-wide text-left">Name</th>
          <th class="w-24 p-3 text-lg text-bold-500 font-semibold tracking-wide text-left">Complaint ID</th>
          <th class="w-59 p-3 text-lg text-bold-500 font-semibold tracking-wide text-left">Subject</th>
          <th class="w-24 p-3 text-lg text-bold-500 font-semibold tracking-wide text-left">Status</th>
          <th class="w-94 p-3 text-lg text-bold-500 font-semibold tracking-wide text-center">Actions</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">

        

         
    {gets &&
      gets.map(items=>(


        <tr class="bg-white">
        

          <td class="p-3 text-sm text-black-500 ">
            <h2 className="text-lg">{items.name}</h2>
          </td>
          
          <td class="p-3 text-lg text-gray-700 ">
          <span
            class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{items._id}</span>
          </td>

          <td class="p-3 text-lg text-gray-700 whitespace-nowrap">
          <span
            class="p-1.5 text-xs  font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50">{items.subject}</span>
          </td>

          <td class="p-3  text-lg text-gray-700 whitespace-nowrap">
          <span
            class="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">{items.status}</span>
          </td>

           <td class="p-3 text-sm justify-center text-center text-gray-700 whitespace-nowrap" >

           <button onClick={handleClick}  className="text-xl  text-blue-500 w-14 h-14  justify-center items-center   ">
            <i class="fa-solid fa-share-from-square"></i>

            
            </button>

            <button onClick={()=>{LoadDetails(items._id)}} className="text-xl  text-green-500 w-14 h-14  justify-center items-center   ">
            <i class="fa fa-eye"></i>

            
            </button>

            <button onClick={()=>{RemoveDetails(items._id)}} className="text-xl  text-red-500 w-14 h-14  justify-center items-center  ">
            <i class="fa fa-trash"></i>

            
            </button>

         

          
          
          </td>

         
       
        </tr>
        
        
        
      ))
    }
        
          
          
         
        
      
        </tbody>
      </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Datas