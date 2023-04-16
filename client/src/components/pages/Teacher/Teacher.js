import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import AddTeacher from "./AddTeacher";
import {  useNavigate } from 'react-router-dom';

import Historys from "./Historys";

function Teacher() {
  const [contractForm, setcontractForm] = useState(false);
  const [myDetails, setMyDetails] = useState(false);
  const [myFile, setMyFile] = useState(false);
 
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


  const navigate = useNavigate()

  const LoadEdit = (_id)=>{

    navigate(`/editteacher/${_id}`)

  }

  
const[InfoUser ,setUserInfo] = useState(null)

    useEffect(()=>{
        fetch("http://localhost:8080/api/v1/getSingleTeacher").then((res)=>{
          return res.json();
        }).then((resp)=>{
            setUserInfo(resp); 
           
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
         
            <h2 className="text-white bg-gray-600 p-4 rounded-md " > Teacher Dashboard</h2>
          
        </div>

        <button
          className=" w-full p-2.5 mt-8 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-blue-600 text-black"
          onClick={() => {
            setMyDetails(true);
            setcontractForm(false);
            setMyFile(false)
            
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
            setcontractForm(false);
            setMyFile(true)
            
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
          File Complain
          </span>
        </div>

        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-red-400 text-black"
          onClick={() => {
            setMyDetails(false);
            setcontractForm(true);
            setMyFile(false)
            
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
          View Grievance 
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







    {contractForm && (
      <div className="z-10 bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
      <div className="bg-white py-4 w-4/5  rounded-md text-center">
        {/* TABLE */}
        <div className="h-[60vh]  overflow-scroll rounded-lg border border-gray-600 shadow-sm m-5">
          <table className="w-full  border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50 border-b-2 border-gray-200">
          <tr>
  
            <th class="p-3 text-lg text-bold-500 font-semibold tracking-wide text-left">Name</th>
            <th class="w-24 p-3 text-lg text-bold-500 font-semibold tracking-wide text-left">Complaint ID</th>
            <th class="w-59 p-3 text-lg text-bold-500 font-semibold tracking-wide text-left">Subject</th>
            <th class="w-24 p-3 text-lg text-bold-500 font-semibold tracking-wide text-left">Status</th>
            <th class="w-94 p-3 text-lg text-bold-500 font-semibold tracking-wide text-center">Actions</th>
          </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
  
          { InfoUser &&
        InfoUser.map(items=>(
  
  
          <tr class="bg-white">
          
  
            <td class="p-3 text-sm text-black-500 ">
              <h2 className="text-lg">{items.name}</h2>
              <h3 className="text-gray-500">{items.uid}</h3>
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
  
             
  
              
        
  
             
             <button onClick={()=>{LoadEdit(items._id)}} className="text-xl  text-green-500 w-14 h-14  justify-center items-center   ">
              <i class="fa fa-pencil"></i>
  
              
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
  
        <button
            onClick={() => {
              setMyDetails(true);
              setcontractForm(false);
              setMyFile(false)
              
            }}
          className="bg-violet-400 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
        >
         Close
        </button>
      </div>
    </div>
   )}






    {myFile && (
      <>
        <div className="w-screen lg:w-2/4 h-full flex justify-center  ">
          <AddTeacher/>
        </div>

        <div className="w-full lg:w-2/4">
          <Historys />

        </div>
          </>

    )}


</div>
    


  
  );
}

export default Teacher;


