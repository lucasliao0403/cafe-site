
import { Inter } from 'next/font/google'
import React from 'react'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
// import {motion} from 'framer-motion'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'cafe example',
  description: 'Lucas Liao\'s cafe',
}

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
