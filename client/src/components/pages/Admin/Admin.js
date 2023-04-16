import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Data from "./Data";
import Datas from "./Datas";





function Admin_dashboard() {
  const [contractForm, setcontractForm] = useState(false);
  const [myDetails, setMyDetails] = useState(false);
  const [teacher, setTeacher] = useState(false);


  const[admins,setAdmins] = useState(null);




  useEffect(()=>{
    fetch("http://localhost:8080/api/v1/getsingle").then((res)=>{
      return res.json();
    }).then((resp)=>{
      setAdmins(resp); 
    }).catch((err)=>{
      console.log(err);
    })

  },[])









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
         
            <h2 className="text-white bg-gray-600 p-4 rounded-md " > Admin Dashboard</h2>
          
        </div>

        <button
          className=" w-full p-2.5 mt-8 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-blue-600 text-black"
          onClick={() => {
            setMyDetails(true);
            setcontractForm(false);
            setTeacher(false)
            
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Profile
          </span>
        </button>

        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-red-400 text-black"
          onClick={() => {
            setMyDetails(false);
            setcontractForm(true);
            setTeacher(false)
            
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
          View Student List
          </span>
        </div>


        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-red-400 text-black"
          onClick={() => {
            setMyDetails(false);
            setcontractForm(false);
            setTeacher(true)
            
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
          View Teacher List
          </span>
        </div>

       
       
        <Link to="/">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-500 hover:bg-red-400 text-black">
            <i className="bi bi-box-arrow-in-right" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Logout
            </span>
          </div>
        </Link>



      </div>

     

  



      {myDetails && (
        <div className="flex mt-8 ml-24 justify-around w-[80vw] h-[80vh] flex-wrap ">
          <div className="bg-white h-auto py-1   w-full">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8  my-8">
              {/* This is main div */}
              <div className="rounded-lg bg-gray-700 px-4 my-12 py-6 md:py-8 lg:py-12">
               
                <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">
                  Profile 
                </h2>
              </div>

              <div className="date w-full bg-gray-200  p-4 mt-1 rounded-md">
                <div className="flex">
                  <p className="font-bold">Id</p>
                  <span className=" ml-2 px-2 py-1 rounded-md font-medium text-sm bg-pink-200 text-pink-600">
                    {admins._id}
                  </span>
                </div>
              </div>
              <div className="date w-full bg-gray-200 p-4 mt-1 rounded-md">
                <div className="flex">
                  <p className="font-bold">Name</p>
                  <span className=" ml-2 px-2 py-1 rounded-md font-medium text-sm bg-orange-200 text-orange-600">
                  {admins.name}
                  </span>
                </div>
              </div>
              <div className="thash w-full bg-gray-200 p-4 mt-1 rounded-md">
                <div className="flex">
                  <p className="font-bold">Email</p>
                  <span className=" ml-2 px-2 py-1 rounded-md font-medium text-sm bg-blue-200 text-blue-600">
                  {admins.email}
                  </span>
                </div>
              </div>
              <div className="bexplorer w-full bg-gray-200 p-4 mt-1 rounded-md">
                <div className="flex">
                  <p className="font-bold">Role</p>
                  <span className=" ml-2 px-2 py-1 rounded-md font-medium text-sm bg-green-200 text-green-600">
                  {admins.role}
                  </span>
                </div>
              </div>
              <div className=" contractAdress w-full bg-gray-200 p-4 mt-1 rounded-md">
                <div className="flex">
                  <p className="font-bold">createdAt</p>
                  <span className=" ml-2 px-2 py-1 rounded-md font-medium text-sm bg-violet-200 text-violet-600">
                    {admins.createdAt}
                  </span>
                </div>
              </div>
             
            </div>
          </div>
        </div>

      )}


    {contractForm && (<Data />) }

    {teacher && (<Datas />)}



</div>
    


  
  );
}

export default Admin_dashboard;