import React from 'react'
import { Link } from 'react-router-dom'
import homepage from '../../images/home.jpg'
import Layout from '../Layout/Layout'



const Home = () => {
  return (
    <>
<Layout>

<div class="bg-white  pb-6 sm:pb-8 lg:pb-12 mt-12  ">
  <div class="max-w-screen-fit px-4 md:px-8 mx-auto">

    <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16 " >

    <div class="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
        <img src={homepage}  alt=" Fakurian Design" class="w-full h-full object-cover object-center" />
      </div>
      
      <div class="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">


        

        <h1 class="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">GRIEVANCE SYSTEM</h1>

        <p class="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">The college grievance system enables students to seek resolution for academic or non-academic concerns by submitting written complaints to the appropriate office, with the purpose of ensuring a fair and impartial process that protects student rights.</p>

        <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
          <Link to='/login' class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">File a Grievance</Link>

          <Link to='/login' class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">LOGIN</Link>
        </div>
      </div>
      
      
    
    </section>
  </div>
</div>


</Layout>    
    </>
  )
}

export default Home