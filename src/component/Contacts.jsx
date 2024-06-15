import React from 'react'
import { CONTACT } from '../constants'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { FaTwitter } from 'react-icons/fa';
import {FaInstagram} from "react-icons/fa"
import {motion} from 'framer-motion'

const Contacts = () => {
  return (
    <div className='border-b border-neutral-900 pb-200 '>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-50}}
      transition={{duration:1.5}}
      className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1.5}}
        className='my-4'>{CONTACT.address}</motion.p>
        <motion.p 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='my-4'>{CONTACT.phoneNo}</motion.p>
        <motion.a 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:100}}
        transition={{duration:1.5}}
        href="josphatthumi47@gmail.com" className='border-b'>{CONTACT.email}</motion.a>

<nav>
        
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='m-8 flex items-center justify-center gap-4 text-2xl'>
            

            <a href= "https://github.com/J-Thumi">   <FaGithub /></a>
        <a href="https://www.instagram.com/__thumi/">   <FaInstagram /></a>
        <a href="https://www.linkedin.com/in/josphat-thumi-0b0795308/">   <FaLinkedin /></a>
          
        </motion.div>
    </nav>
      </div>
      
    </div>
  )
}

export default Contacts
