import logo from '../assets/logo png 1.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'

export default function Footer() {
  return (
  <div className='mt-[3em] w-[100%]  mx-auto'> 
    <div className='md:flex justify-between'>
        <div className=' md:w-[40%]'>
            <img src={logo} alt='logo' className='w-[150px] object-cover'/>
            <p className='py-3 opacity-70'>Lorem ipsum dolor sit amet consectetur. Sagittis egestas erat tortor donec suspendisse pretium tellus egestas arcu.</p>
            
            <div className='flex gap-10 md:gap-5 my-3'>
                <div className='bg-black rounded-full  w-[23px] h-[23px] p-1  flex justify-center'>
                    <img src={facebook} alt='facebook-icon' />
                </div>

                <div className='bg-black rounded-full  w-[23px] h-[23px] p-1  flex justify-center'>
                    <img src={twitter} alt='twitter-icon' />
                </div>
                <div className='bg-black rounded-full  w-[23px] h-[23px] p-1  flex justify-center'>
                    <img src={instagram} alt='instagram-icon' />
                </div>
                <div className='bg-black rounded-full w-[23px] h-[23px] p-1  flex justify-center'>
                    <img src={linkedin} alt='linkedin-icon' className=''/>
                </div>
            </div>
        </div>
        
        <div className='flex flex-wrap md:flex-nowrap my-5 md:gap-10 justify-between '>
            <ul >
                <p className='opacity-70 py-3'>Company</p>
                <li className='py-2'>About us</li>
                <li className='py-2'>Contact us</li>
                <li className='py-2'>Careers</li>
                <li className='py-2'>Press</li>
            </ul>

            <ul>
               <p className='py-3 opacity-70'>Services</p>
                <li className='py-2'>Mentorship</li>
                <li className='py-2'>Resume Review</li>
                <li className='py-2'>SEO for Business</li>
                <li className='py-2'>Talent Recruitment</li>
            </ul>

            <ul>
                <p className='py-3 opacity-70'>Legal</p>
                <li className='py-2'>Privacy Policy</li>
                <li className='py-2'>Terms & Conditions</li>
                <li className='py-2'>Return Policy</li>
            </ul>
        </div>
    </div>
    <div className='sm:flex  mb-3 mt-[1.5em] bg-[#54E3EA] items-center justify-center md:justify-between p-2 rounded-md'>
        <p className=' text-[0.8rem] font-bold py-1 sm:py-5'>© 2024 Footprint Mentorship. All rights reserved.</p>
        <img src={logo} alt='logo' className='hidden md:block w-[130px]'/>
    </div>
    </div> 
  )
}
