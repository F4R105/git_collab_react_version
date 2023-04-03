import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function Layout() {
  return (
  <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='grow'>
            <div className="container">
                <Outlet />
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Layout