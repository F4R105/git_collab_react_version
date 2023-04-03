import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

function Dashboard() {
  return (
    <div className='relative flex gap-8 overflow-y-scroll '>
        <section id='left'>
            <div id="dashboard" className='sticky'>
                Hello
            </div>
            <div id="blogs" className='flex flex-col gap-8'>
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
            </div>
        </section>
        <section id='right' className=''>
            <ul id="best_authors">
                <li>
                    Faraji
                </li>
                <li>
                    Azim
                </li>
                <li>
                    Derek
                </li>
                <li>
                    Massawe
                </li>
            </ul>
        </section>
    </div>
  )
}

export default Dashboard