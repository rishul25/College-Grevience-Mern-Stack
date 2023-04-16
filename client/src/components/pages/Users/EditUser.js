import React, { useState ,useEffect } from 'react'
import {  Link, useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

const {id} = useParams();
const navigate  = useNavigate()
const [_id,setID] = useState("");
const [complain,setComplain] = useState("");
const [branch,setBranch] = useState("");


  useEffect(()=>{
    fetch("http://localhost:8080/api/v1/"+id).then((res)=>{
      return res.json();
    }).then((resp)=>{
            
            setID(resp._id)
            setComplain(resp.complian)
            setBranch(resp.branch)
            
            
    }).catch((err)=>{
      console.log(err);
    })

  },[id])

 
const handleSubmit=(e)=>{
      e.preventDefault();

      const datas = {complain,branch};
      

      fetch("http://localhost:8080/api/v1/edits/"+id,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(datas)
      }).then((res)=>{

        console.log(res)

        alert("Saved Succesfully!")
        navigate("/student");

      }).catch((err)=>{
        console.log(err.message)
      })


      
  }



    
  return (

    <div className="z-10 bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
    <div className="bg-white py-4 w-2/4  rounded-md text-center flex flex-col justify-center items-center">

    <form  onSubmit={handleSubmit}>
      <div className="mb-4">Edit Your Info</div>

      <div className="flex flex-wrap px-4 py-1 w-full">
        <div className="relative w-full appearance-none label-floating">

            
          <input value={_id} onChange={e=>setID(e.target.value)} className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-50 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
           
            type="text"
            placeholder="Enter complaintID"
          />
        </div>
      </div>
      <div className="flex flex-wrap px-4 py-1 w-full">
        <div className="relative w-42 appearance-none label-floating w-full">
          <input
           
            value={branch} onChange={e=>setBranch(e.target.value)}
            className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-50 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
         
            type="text"
            placeholder="Enter Status of Gravience"
          />
        </div>
      </div>

      <div className="flex flex-wrap px-4 py-1 w-full">
        <div className="relative w-42 appearance-none label-floating w-full">
          <input
           
            value={complain} onChange={e=>setComplain(e.target.value)}
            className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-50 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
        
            type="text"
            placeholder="Enter Comments if Any"
          />
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <button
          type="submit"
          className="bg-green-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
        >
          Submit
        </button>

        <button
         
          className="bg-red-400 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
        >
          <Link to='/student'>CLose</Link>
        </button>
      </div>
      </form>
    </div>
  </div>







  )
}

export default EditUser