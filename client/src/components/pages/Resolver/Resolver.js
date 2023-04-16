import React ,{useState} from "react";
import { Link } from "react-router-dom";
import ResolverData from "./ResolverData";
import TeacherResolver from "./TeacherResolver";



function Resolver() {



  const [student, setStudent] = useState(false);
  const [teacher, setTeacher] = useState(false);












  return (

    <div className="flex">
      <div className="sidebar justify-self-start  px-4 w-[300px] h-screen overflow-y-auto text-center shadow-lg shadow-indigo-500/40 bg-white-800">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600" />
            <h1 className="font-bold text-lg text-black text-[15px] ml-3">
            College Grievance 
            </h1>
          </div>

          <div className="my-2  bg-black-400 h-[10px]" />
         
            <h2 className="text-white bg-gray-600 p-4 rounded-md " > Resolver Dashboard</h2>
          
          </div>

          <button
          className=" w-full p-2.5 mt-8 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-blue-600 text-black"
          onClick={() => {
            setStudent(true)
            setTeacher(false)
            
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Student
          </span>
        </button>


        <button
          className=" w-full p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-blue-600 text-black"
          onClick={() => {
            setStudent(false)
            setTeacher(true)
            
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Teacher
          </span>
        </button>

         
       
       
        <Link to="/">
          <div className="p-2.5 mt-6 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-500 hover:bg-red-400 text-black">
            <i className="bi bi-box-arrow-in-right" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Logout
            </span>
          </div>
        </Link>




    



      </div>

     
      {student && (<ResolverData />)}

      {teacher && (<TeacherResolver />)}


     

    


</div>
    


  
  );
}

export default Resolver;