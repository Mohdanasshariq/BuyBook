import React from 'react'
import Home from './home/Home'
import Buy from './components/Buy'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
   <>
   
   
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/buy" element={<Buy/>}/>
   </Routes>
   </>
  )
}

export default App
