import logo from '../assets/logo png 1.svg'
import menu from '../assets/menu-icon.png'
import close from '../assets/close.png'
import { useState } from 'react'

export default function Nav() {

    const [open, setOpen] = useState(false)
  return (
    <div className={`  bg-white flex justify-between py-1 md:py-3 text-[1rem] px-[1.5rem] md:px-[3.5em]`}>  
        <div>
            <img src={logo} alt='logo' className=' object-cover w-[90px]'/>
        </div>
        
        <ul className={`${open? 'absolute md:static w-[50%] sm:w-[40%] text-[1.1rem] md:text-[1rem] md:w-fit  px-10 md:px-0 py-3 md:py-0 grid gap-2 z-50 h-full transition-all bg-white md:bg-none left-0':'hidden transition-all'}   md:flex gap-7`}>
            <img src={close} className='block md:hidden w-[30px] cursor-pointer ml-auto' onClick={()=>setOpen(false)}/>
            <li className='font-bold'>Home</li>
            <li>About Us</li>
            <li>Talents</li>
            <li>Contact Us</li>
            <li>Policy</li>
        </ul>

        <button className=' px-2 bg-yellow border-0 p-1 font-bold '>Get Started</button>

        <img src={menu} alt='menu-icon' className='w-[30px] h-[30px] md:hidden cursor-pointer' onClick={()=>setOpen(true)}/>
    </div>
  )
}
