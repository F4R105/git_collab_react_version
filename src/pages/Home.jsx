import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()

  return (
    <>
    <section id='hero' className='flex flex-col justify-center'>
        <h1 className='text-5xl font-bold text-emerald-900'>Welcome to git collab</h1>
        <p className='text-xl font-semibold text-emerald-950'>Writers favourite platform</p>
        <div id="buttons" className='mt-12 flex gap-2'>
            <a href="#blogs_container" className='p-2 text-md border-2 border-emerald-900 hover:bg-emerald-900 hover:text-white'>Start reading</a>
            <button 
              className='p-2 text-md border-2 border-emerald-900 hover:bg-emerald-900 hover:text-white'
              onClick={()=>navigate('/register')}
            >Create account
            </button>
        </div>
    </section>
    <section id='blogs_container' className='grid grid-cols-1 gap-8 md:grid-cols-2'>
      <div className='rounded-md shadow-lg p-2'>
        <h3 className='font-bold text-emerald-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur suscipit tempore placeat?</h3>
        <div className='pb-2 italic text-gray-500'>
          <span className='font-bold'>Author: </span>
          <span>Faraji Kajubu</span>
        </div>
        <p className='text-emerald-950'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsa distinctio incidunt consectetur corporis ex assumenda autem! Voluptatum, adipisci officia?</p>
        <div 
          className='mt-5 flex gap-2 w-fit cursor-pointer'
        >
          <ThumbUpIcon />
          <ThumbUpOutlinedIcon />
          <span className='font-semibold'>530</span>
        </div>
      </div>
      <div className='rounded-md shadow-lg p-2'>
        <h3 className='font-bold text-emerald-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur suscipit tempore placeat?</h3>
        <div className='pb-2 italic text-gray-500'>
          <span className='font-bold'>Author: </span>
          <span>Faraji Kajubu</span>
        </div>
        <p className='text-emerald-950'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsa distinctio incidunt consectetur corporis ex assumenda autem! Voluptatum, adipisci officia?</p>
        <div 
          className='mt-5 flex gap-2 w-fit cursor-pointer'
        >
          <ThumbUpIcon />
          <ThumbUpOutlinedIcon />
          <span className='font-semibold'>530</span>
        </div>
      </div>
      <div className='rounded-md shadow-lg p-2'>
        <h3 className='font-bold text-emerald-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur suscipit tempore placeat?</h3>
        <div className='pb-2 italic text-gray-500'>
          <span className='font-bold'>Author: </span>
          <span>Faraji Kajubu</span>
        </div>
        <p className='text-emerald-950'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsa distinctio incidunt consectetur corporis ex assumenda autem! Voluptatum, adipisci officia?</p>
        <div 
          className='mt-5 flex gap-2 w-fit cursor-pointer'
        >
          <ThumbUpIcon />
          <ThumbUpOutlinedIcon />
          <span className='font-semibold'>530</span>
        </div>
      </div>
      <div className='rounded-md shadow-lg p-2'>
        <h3 className='font-bold text-emerald-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur suscipit tempore placeat?</h3>
        <div className='pb-2 italic text-gray-500'>
          <span className='font-bold'>Author: </span>
          <span>Faraji Kajubu</span>
        </div>
        <p className='text-emerald-950'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsa distinctio incidunt consectetur corporis ex assumenda autem! Voluptatum, adipisci officia?</p>
        <div 
          className='mt-5 flex gap-2 w-fit cursor-pointer'
        >
          <ThumbUpIcon />
          <ThumbUpOutlinedIcon />
          <span className='font-semibold'>530</span>
        </div>
      </div>
      <div className='rounded-md shadow-lg p-2'>
        <h3 className='font-bold text-emerald-900'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur suscipit tempore placeat?</h3>
        <div className='pb-2 italic text-gray-500'>
          <span className='font-bold'>Author: </span>
          <span>Faraji Kajubu</span>
        </div>
        <p className='text-emerald-950'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, ipsa distinctio incidunt consectetur corporis ex assumenda autem! Voluptatum, adipisci officia?</p>
        <div 
          className='mt-5 flex gap-2 w-fit cursor-pointer'
        >
          <ThumbUpIcon />
          <ThumbUpOutlinedIcon />
          <span className='font-semibold'>530</span>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home