import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Buyy from '../components/Buyy'
import list from '../list.json'

function Buy() {
  return (
    <>
      <Navbar/>
    <div className= 'min-h- screen '>
    <Buyy/>
    </div>
      
      <Footer/>
    </>
  )
}

export default Buy
