import React from 'react'
import Layout from '../Layout/Layout'
import AboutPage from '../../images/About.jpg'

const About = () => {
  return (
    <>

<Layout>
 
 
    
  <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
      <div>
        <div className="h-48 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
          <img src={AboutPage} loading="lazy" alt="Martin Sanchez" className="w-full h-full object-cover object-center" />
        </div>
      </div>
      <div className="md:pt-8">
        
        <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">About Us</h1>
       
    
        <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
      </div>
    </div>
  </div>
</div>


</Layout>   
    </>
  )
}

export default About