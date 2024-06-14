import React from 'react'
import logo from "../assets/loogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {FaInstagram} from "react-icons/fa"

const Navbar = () => (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-20' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaGithub />
            <FaInstagram />
            <FaLinkedin />
            <FaTwitter />

            {/* <Link to="https://github.com/J-Thumi">   <FaGithub /></Link>
        <Link to="https://www.instagram.com/__thumi/">   <FaInstagram /></Link>
        <Link to="https://www.linkedin.com/in/josphat-thumi-0b0795308/">   <FaLinkedin /></Link> */}
          
        </div>
    </nav>
)

export default Navbar
