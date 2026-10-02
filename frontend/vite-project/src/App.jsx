import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Createnote from './pages/Createnote'
import { Route , Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-900 text-white'> 
      {/*navbar*/}
      <Navbar/>
{/*main content*/}
<main >
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Createnote />} />
        
        
        
      </Routes>
</main>

{/*footer*/}
<Footer/>
    </div>
  )
}


