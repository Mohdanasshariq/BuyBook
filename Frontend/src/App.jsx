import React from 'react'
import Home from './home/Home'
import Buy from './buy/Buy'
import {Routes,Route} from 'react-router-dom'
import Signup from './components/Signup'

import Contactt from './contact/Contactt'
function App() {
  return (
   <>
   
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/buy" element={<Buy/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/contact" element={<Contactt/>}/>
   </Routes>
   </div>
   </>
  )
}

export default App
