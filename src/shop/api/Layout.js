import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Navigate from './Navigate'

export default function Layout({compenent}) {
  return (
    <>
    <Navbar />
   
    <hr/>
    
    <div className='container-lg'>
        {compenent}
    </div>
    <div className='text-center '> 
    </div>
    <div className='' style={{marginTop:"150px"}}>
    <Footer/>
    </div>
    </>
  )
}
