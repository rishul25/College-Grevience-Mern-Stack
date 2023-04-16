import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
<div className="bg-white lg:pb-12">
  <div className="max-w-screen-fit    mx-auto">
    <header className="flex justify-between items-center  py-4 md:py-8 bg-indigo-500">
      <Link to='/' className="inline-flex items-center text-black-800 text-2xl text-white md:text-3xl font-bold gap-2.5 ml-9 " aria-label="logo">
        <svg width={80} height={80} viewBox="0 0 95 94" className="w-6 h-auto text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>
        Educa
      </Link>
      <nav className="hidden lg:flex gap-12">
        <Link to='/' className="text-white hover:text-black active:text-indigo-700 text-lg font-semibold transition duration-100">Home</Link>
        <Link to='/feature' className="inline-flex items-center hover:text-black text-white text-lg font-semibold gap-1">
          Features
          
        </Link>
        <Link to='/login' className="text-white hover:text-black active:text-indigo-700 text-lg font-semibold transition duration-100">Apply</Link>
        <Link to='/about' className="text-white hover:text-black active:text-indigo-700 text-lg font-semibold transition duration-100">About</Link>
      </nav>
      <div className="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
        <Link to='/login' className="inline-block focus-visible:ring ring-indigo-300 text-white hover:text-black active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3  ">Sign in</Link>
        <Link to='/register' className="inline-block bg-blue-300 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring mr-5  hover:text-black ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-7  py-3">Sign up</Link>
      </div>
     
    </header>
  </div>
</div>







    
    </>
  )
}

export default Header