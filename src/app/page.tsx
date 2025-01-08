import React from 'react'
import Hero from './components/About'
import Navbar from './components/navbar'
import Aboutsection from './components/Aboutsection'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


const Home = () => {
  return (
    <div className='flex min-h-screen flex-col bg-[#121212] '>
      <Navbar/>
     <div className="container mt-24  mx-auto py-4 px-12">
     <Hero/>
     <Aboutsection/>
     <Projects/>
     <Contact/>
     <Footer/>

     </div>
    </div>
  )
}

export default Home