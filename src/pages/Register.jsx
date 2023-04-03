import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <form action="" className='w-full max-w-md'>
      <h1 className='text-3xl font-bold mb-4'>Registration form</h1>
      <div className='flex flex-col mb-4'>
        <label htmlFor="" className='text-sm text-emerald-900 font-semibold'>Email</label>
        <input 
          type="text" 
          placeholder='Enter email'
          className='border-2 border-emerald-900 p-2 rounded-sm'
        />
      </div>
      <div className='flex flex-col mb-4'>
        <label htmlFor="" className='text-sm text-emerald-900 font-semibold'>Password</label>
        <input 
          type="password" 
          placeholder='Enter password'
          className='border-2 border-emerald-900 p-2 rounded-sm'
        />
      </div>
      <div className='flex flex-col mb-4'>
        <label htmlFor="" className='text-sm text-emerald-900 font-semibold'>Confirm Password</label>
        <input 
          type="password" 
          placeholder='Enter password'
          className='border-2 border-emerald-900 p-2 rounded-sm'
        />
      </div>
      <button
        className='bg-emerald-800 p-3 rounded-sm uppercase w-full text-white hover:bg-emerald-700 mb-6'
      >
        Create account
      </button>
      <Link 
        to="/login"
        className='hover:text-emerald-800'
      >
        Already have an account, Login
      </Link>
    </form>
  )
}

export default Register