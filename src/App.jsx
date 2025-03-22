import React from 'react'
import Home from './home/Home'
import Buy from './Buy/Buy'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
   <>
   
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/buy" element={<Buy/>}/>
   </Routes>
   </div>
   </>
  )
}

export default App
