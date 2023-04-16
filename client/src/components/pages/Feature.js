import React from 'react'
import Layout from '../Layout/Layout'
import helping1 from '../../images/helpinh1.jpg'
import Receving from '../../images/receving.jpg'
import solving from '../../images/solving.jpg'
import maintaing from '../../images/maintaing.jpg'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <>

    <Layout>

<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-10 flex  md:mb-16">
      <h2 className="mb-4 border-b-4 border-indigo-600  text-2xl text-start font-bold text-gray-800 md:mb-6 lg:text-3xl">Online Grievance Management for <br /> College as per AICTE</h2>
      <p className="mx-auto text-start  max-w-screen-md  text-gray-500 md:text-lg">We have created this module which fulfills the purpose of Online Grievance Redressal System For Colleges and other educational institutes, keeping AICTE's rule of Grievance Redressal in focus. According to AICIE "Grievances Redressal cell deals with all types of grievances, complaints and malpractices including those received from Students Faculty and other Stakeholders.</p>
    </div>



    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
      <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
        <Link to="#" className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src={helping1} loading="lazy" alt="Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </Link>
        <div className="flex flex-1 flex-col p-4 sm:p-6">
            <h3 className='  text-purple-500 py-4 '>Feature 01</h3>
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            <Link to="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Helping hand</Link>
          </h2>
          <p className="mb-8 text-gray-500">This module provides helping hand to students and staff by acknowledging and solving their problems. It maintains the healthy environment for stakeholders of the institute.</p>
          
        </div>
      </div>


      <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
        <Link to="#" className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src={Receving} loading="lazy" alt="Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </Link>
        <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className='  text-purple-500 py-4 '>Feature 02</h3>
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            <Link to="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Receiving complaints</Link>
          </h2>
          <p className="mb-8 text-gray-500">Admin can always receive verbal complaints but such complaints can be forgotten. We help receiving logging complaints in written and work on them.</p>
          
        </div>
      </div>

      <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
        <Link to="#" className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src={maintaing} loading="lazy" alt="Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </Link>
        <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className='  text-purple-500 py-4 '>Feature 03</h3>
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            <Link to="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Maintaining complaints</Link>
          </h2>
          <p className="mb-8 text-gray-500">Dealing with too many complaints without delay can be a challenging task. Therefore we have made our module in a way that complaints can be effortlessly managed</p>
          
        </div>
      </div>

      <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
        <Link to="#" className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src={solving} loading="lazy" alt="Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </Link>
        <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className='  text-purple-500 py-4 '>Feature 04</h3>
          <h2 className="mb-2 text-lg font-semibold text-gray-800">
            <Link to="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solving complaints</Link>
          </h2>
          <p className="mb-8 text-gray-500">Assigned person can keep track of status of complaints. Complaints judged to be invalid or without substance, or where it is judged to not warrant further action, can be marked as rejected</p>
          
        </div>
      </div>

    </div>
  </div>
</div>




    </Layout>
    
    
    </>
  )
}

export default Feature