import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

    
let navigate  = useNavigate()


const [password,setPassword] = useState("");

const [username,setUsername] = useState("");



const handleSubmit = async(e)=>{
  e.preventDefault();

  const datas = {password,username};

  await axios.post("http://localhost:8080/api/v1/login",datas).then((response)=>{

 


    if(response.data.role === "Admin"){
      navigate("/admin")
    }
    else if (response.data.role === "Student"){
      navigate('/student')
    }
    else if (response.data.role === "Teachers"){
      navigate('/teacher')
    }
    else{
      alert("Enter Valid Credientials")
    }
  }).catch((err)=>{
    alert(" Wrong Credientails")
  })


}







  return (
    <>

        <div class="h-screen md:flex">
            <div
                class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
                <div>
                    <h1 class="text-white font-bold text-4xl font-sans">Educa-Login</h1>
                    <p class="text-white mt-1">A platform to RESOLVE your queries</p>
                    <div className='flex justify-between items-center'> 
                    <Link to='/register'  class="block w-28 text-center bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2" >Signup</Link>
                    <Link to='/'  class="block w-28 text-center bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2" >Home</Link>
                    </div>
                    
                </div>
                <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form onSubmit={handleSubmit} class="bg-white">
                    <h1 class="text-gray-800 font-bold text-2xl mb-1">Please Login To Continue</h1>
                    <p class="text-sm font-normal text-gray-600 mb-7">Welcome to Educa</p>
                
                        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                            </svg>
                            <input class="pl-2 outline-none border-none w-full" value={username} onChange={e=>setUsername(e.target.value)} type="text" name="username" id="username" placeholder="Username" />
                       </div>
                        
                        <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                        fill="currentColor">
                                    <path fill-rule="evenodd"
                                         d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <input class="pl-2 outline-none border-none w-full" value={password} onChange={e=>setPassword(e.target.value)} type="text" name="password" id="password" placeholder="Password" />
                        </div>
                                    <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                                    <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ? Click Here to </span> <Link to='/register'>Register</Link>
                </form>
            </div>
        </div>
            
    
    </>
  )
}

export default Login