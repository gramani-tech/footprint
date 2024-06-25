import logo from '../assets/logo png 1.svg'
import {
    Bars3Icon,
  } from '@heroicons/react/24/outline'

import { useState } from 'react'
import MobileNav from './mobile'

export default function Nav() {

    const [open, setOpen] = useState(false)
  return (
    <div className={`  bg-white flex justify-between py-5 md:py-2  h-[5em] text-[1rem] px-[2.5rem] lg:px-[6em]`}>  
          {
            open && <MobileNav setOpen={setOpen} open={open}/>
        }
        
        <div>
            <img src={logo} alt='logo' className=' object-cover w-[120px] md:w-[170px]'/>
        </div>
        
        <ul className={`text-[1.1rem] md:text-[1rem] py-5 hidden lg:flex gap-7`}>
            {/* <img src={close} className='block md:hidden w-[30px] cursor-pointer ml-auto' onClick={()=>setOpen(false)}/> */}
            <li className='font-bold'>Home</li>
            <li>About Us</li>
            <li>Talents</li>
            <li>Contact Us</li>
            <li>Policy</li>
        </ul>

        <button className=' px-3 hidden lg:block bg-yellow border-0 py-2 md:my-2 font-bold '>Get Started</button>

        <div className="  lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
        </div>

      
    </div>
  )
}
