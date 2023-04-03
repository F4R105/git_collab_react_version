import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className='bg-emerald-700 fixed w-full z-10'>
        <div className="container flex items-center justify-between">
            <div id="logo" className='text-2xl font-bold cursor-pointer' onClick={()=>navigate('/')}>GIT COLLAB</div>
            <div className='flex gap-6 items-center'>
              <button onClick={()=>navigate('login')}>Login</button>
              <div 
                id="user_avatar" 
                className='relative h-10 w-10 rounded-full border-2 border-emerald-500 flex justify-center items-center cursor-pointer'
              >
                <span className='font-bold'>FK</span>
                <ul id="dropdown" className='bg-emerald-700 p-2 rounded-md'>
                  <li>
                    <button 
                      className='w-full py-2 hover:bg-emerald-600'
                      onClick={()=>navigate('/user/dashboard')}
                    >
                      My Dashboard
                    </button>
                  </li>
                  <li>
                    <button 
                      className='w-full py-2 hover:bg-emerald-600'
                      onClick={()=>navigate('/user/')}
                    >
                      Blogs
                    </button>
                  </li>
                  <li>
                    <button 
                      className='w-full py-2 hover:bg-emerald-600'
                      onClick={()=>navigate('/user/authors')}
                    >
                      Authors
                    </button>
                  </li>
                  <li>
                    <button 
                      className='w-full py-2 hover:bg-emerald-600'
                      onClick={()=>navigate('/user/settings')}
                    >
                      Settings
                    </button>
                  </li>
                  <li>
                    <button 
                      className='w-full py-2 hover:bg-emerald-600'
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar