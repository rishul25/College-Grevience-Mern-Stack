import React, { useState ,useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const TeacherInfo = () => {

    const {id} = useParams();
    
    const [admins,setAdmins] = useState({})

    const navigate = useNavigate()

    
    useEffect(()=>{
        fetch("http://localhost:8080/api/v1/teacher/"+id).then((res)=>{
          return res.json();
        }).then((resp)=>{
          setAdmins(resp); 
        }).catch((err)=>{
          console.log(err);
        })
    
      })

      function OnSubmits(){
        navigate('/admin')
      }

  return (
    <div className='container'>
    
    { admins &&

     <div className="z-10 bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
          <div className=" bg-white px-16 py-14 rounded-md text-center border w-[50vw] ">
            <h2 className="text-sm mb-4 font-bold text-slate-500">
              Below is the Complaint Added by user with ID
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                {admins._id}
              </span>
            </h2>
            <div className="bg-green-50 p-2">
              <p className="test-sm text-gray-600 text-center ">
               {admins.complain}
              </p>
            </div>

            <button
              onClick={OnSubmits}
              className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold mt-2"
            >

              Back
              
            </button>
          </div>
        </div>
    }
</div>

  )
}

export default TeacherInfo