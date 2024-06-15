import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Technologies from './component/Technologies'
import Experience from './component/Experience'
import Projects from './component/Projects'
import Contacts from './component/Contacts'
import {Layout} from 'antd'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    //initially icons were black which was the color of background making it diff
    //to see add the following className to make them visible

    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300
    selection:text-cyan-900'>
      <div className="fixed top-0 -z-10 h-full w-full" >
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    
      </div>
     
     
    <div className="container mx-auto px-8">
    <Navbar />
    <Hero />
    <About />
    <Technologies />
    <Experience />
    <Projects />
    <Contacts />

{/* <Layout>
            <div className="routes">
              <Routes> 
                  <Route exact path="/hero" element={<Hero />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/technologies" element={<Technologies />} />
                  <Route exact path="/experience" element={ <Experience />} />
                  <Route exact path="/projects" element={<Projects />} />
                  <Route exact path="/contacts" element={<Contacts />} />
              </Routes>
            </div>
            </Layout> */}
    </div>
    

    </div>
  )
}

export default App
