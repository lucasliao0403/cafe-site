
import { Inter } from 'next/font/google'
import React from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
// import {motion} from 'framer-motion'


export default function RootLayout({ children }) {
  return (
    <div>

        <Header/>
        <div className='main'>
            {children}       
        </div>
        <Footer/>

    </div>
  )
}
