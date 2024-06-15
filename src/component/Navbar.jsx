import React from 'react'
import logo from "../assets/loogo.png"

import {Link} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Experience from './Experience';
import Technologies from './Technologies';
import Projects from './Projects';
import Contacts from './Contacts';
import Hero from './Hero';
const Navbar = () => (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-20' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            
        
        {/* <Link to="/hero">Hero </Link>
        {/* <Route path="/.About" element={<About />} />  
        <Route path="/.Experience" element={<Experience />} />  
        <Route path="/.Technologies" element={<Technologies />} />  
        <Route path="/.Projects" element={<Projects />} />  
        <Route path="/.Contacts" element={<Contacts/>} />   */} 
        
    
            
       
          
        </div>
    </nav>
)

export default Navbar
