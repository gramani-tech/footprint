import logo from '../assets/logo png 1.svg'

export default function Nav() {
  return (
    <div className=' bg-white flex justify-between py-3 text-[1rem] px-[3.5em]'>
        <div>
            <img src={logo} alt='logo' className=' object-cover w-[90px]'/>
        </div>
        
        <ul className='flex gap-7'>
            <li className='font-bold'>Home</li>
            <li>About Us</li>
            <li>Talents</li>
            <li>Contact Us</li>
            <li>Policy</li>
        </ul>

        <button className=' px-2 bg-yellow border-0 p-1 font-bold '>Get Started</button>
    </div>
  )
}
