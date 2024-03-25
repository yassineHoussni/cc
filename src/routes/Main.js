import React from 'react'
import Navbar from './Navbar'

export default function Main(props) {
  return (
    <div >
      <Navbar/>
      {props.msg} page
    </div>
  )
}
