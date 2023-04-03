import React from 'react'
import { Link } from 'react-router-dom'

function Settings() {
  return (
    <>
        <h1 className='text-2xl font-bold mb-6 text-emerald-900'>Settings</h1>
        <form action="" className='w-full max-w-md mb-10'>
            <h1 className='text-3xl font-bold mb-4'>Change Password</h1>
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
                Change password
            </button>
        </form>
        <form action="" className='w-full max-w-md'>
            <h1 className='text-3xl font-bold mb-4 text-red-500'>Delete account</h1>
            <button
                className='bg-emerald-800 p-3 rounded-sm uppercase w-full text-white hover:bg-red-500 mb-6'
            >
                Delete account
            </button>
        </form>
    </>
  )
}

export default Settings