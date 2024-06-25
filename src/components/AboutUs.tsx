import frame1 from '../assets/Frame 34.jpg'
import frame2 from '../assets/Frame 36.jpg'
import frame3 from '../assets/Frame 37.jpg'
import frame4 from '../assets/unsplash_-uHVRvDr7pg.jpg'
import frame5 from '../assets/unsplash_IgUR1iX0mqM.jpg'
import frame6 from '../assets/unsplash_nKEARsgmrqc.jpg'
import frame7 from '../assets/unsplash_tLG2hcpITZE.jpg'
import frame8 from '../assets/unsplash_vdXMSiX-n6M.jpg'
import line from '../assets/Line 1.svg'
import arrow from '../assets/arrow-right.svg'
import line2 from '../assets/Line2.svg'
import upicon from '../assets/arrow-up-right.svg'

export default function AboutUs() {
  return (
    <div className='my-[2.5em] w-[100%] mx-auto'>
        <div className='w-fit'>
        <h2 className='text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-platypi font-[600] relative'>About Us
           <img src={line} alt='line-image' className=' absolute -bottom-1 -z-10'/>
        </h2>
        </div>
        
        <div className='my-8 w-full gap-1 flex-col-reverse md:flex-row flex '>
            <div className=' bg-white lg:pl-7  md:w-[60%] h-fit p-3 rounded-lg shadow-md drop-shadow-md'>
                <div className='flex justify-between'>
                    <h3 className=' text-[1.5rem] md:text-[1.7rem] font-[550] '>Lorem ipsum dolor <span className='block leading-4'>sit amet</span></h3>
                    <div className='bg-yellow rounded-full h-[30px] w-[30px] flex justify-center'>
                        <img src={arrow} className='w-[20px] m-2'/>
                    </div>
                </div>
                
                <p className='my-5 text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur. Pellentesque vitae amet dui eget erat. 
                    Porttitor molestie malesuada semper vestibulum et. Viverra pulvinar aliquam libero sed at quis vitae lectus arcu. 
                    Viverra magna a nec aliquet. Cras pharetra vel sed sit scelerisque semper. Cras tortor et tellus lobortis risus.
                </p>
            </div>

            <div className=' md:w-[40%] lg:w-[30%] grid gap-2   p-2 '>
                <div className='flex  gap-2'>
                    <img src={frame1} alt='photo' className=' w-[50%] rounded-xl object-cover'/>
                    <img src={frame2} alt='photo' className='w-[50%] rounded-xl object-cover'/>
                </div>

                <div className='flex  gap-2'>
                <img src={frame6} alt='photo' className=' w-[50%] rounded-xl object-cover'/>
                <img src={frame3} alt='photo' className='w-[50%] rounded-xl  object-cover'/>
                </div>
                
                
            </div>

        </div>

        <div className='my-7 w-full md:flex gap-3'>
            <div className=' md:w-[40%] lg:w-[30%] grid gap-2 p-2 '>
                <div className='flex  gap-2'>
                    <img src={frame4} alt='photo' className='w-[50%] rounded-xl object-cover'/>
                    <img src={frame5} alt='photo' className='w-[50%]   rounded-xl   object-cover'/>
                </div>

                <div className='flex  gap-2'>
                    <img src={frame7} alt='photo' className='w-[50%] rounded-xl object-cover'/>
                    <img src={frame8} alt='photo' className='w-[50%] rounded-xl object-cover'/>
                </div>
                 
            </div>

            <div className=' bg-white  md:w-[60%] h-fit p-3 lg:pl-7 rounded-lg shadow-md drop-shadow-md'>
                <div className='flex justify-between'>
                    <h3 className=' text-[1.5rem] md:text-[1.7rem] font-[550] '>Lorem ipsum dolor <span className='block leading-4'>sit amet</span></h3>
                    <div className='bg-yellow rounded-full h-[30px] flex justify-center w-[30px]'>
                        <img src={arrow} className='w-[20px] m-2'/>
                    </div>
                </div>
                
                <p className='my-5 text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur. Pellentesque vitae amet dui eget erat. Porttitor molestie malesuada semper vestibulum et. Viverra pulvinar aliquam libero sed at quis vitae lectus arcu. Viverra magna a nec aliquet. Cras pharetra vel sed sit scelerisque</p>
            </div>

            

        </div>
        
        <div className=' font-platypi my-[5em]'>
        <div className='w-fit mx-auto my-5'>
            <h2 className='text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-[600] relative'>Our Services
                <img src={line2} alt='line-image' className=' absolute bottom-1 -z-10'/>
            </h2>
        </div>

        <div className=' mx-auto'>
            <div className='flex flex-wrap justify-center gap-3 md:gap-5 lg:px-10'>
                <div className=' w-fit bg-yellow  my-3 p-2 rounded-t-2xl rounded-bl-2xl flex gap-2 items-center'>
                    <h3 className='text-[1.2rem] sm:text-[1.5rem] font-bold'>Mentorship</h3>
                    <div className='bg-black w-[20px] h-[20px] rounded-full'>
                        <img src={upicon} className='w-[12px] m-1' alt='up-right-icon'/>
                    </div>
                </div>

                <div className='bg-yellow w-fit  my-3 p-2 rounded-t-2xl rounded-bl-2xl flex gap-2 items-center'>
                    <h3 className='text-[1.2rem] sm:text-[1.5rem] font-bold'>Resume Review</h3>
                    <div className='bg-black w-[20px] h-[20px] rounded-full'>
                        <img src={upicon} className='w-[12px] m-1' alt='up-right-icon'/>
                    </div>
                </div>  
            </div>

            <div className='bg-[#54E3EA] w-fit mx-auto  my-3 p-2 rounded-t-2xl rounded-br-2xl flex gap-2 items-center'>
                    <h3 className='text-[1.2rem] sm:text-[1.5rem] font-bold'>Talent Recruitment</h3>
                    <div className='bg-black w-[20px] h-[20px] rounded-full'>
                        <img src={upicon} className='w-[12px] m-1' alt='up-right-icon'/>
                    </div>
            </div>

            <div className='bg-[#2C6E49] text-white mx-auto w-fit  my-2 p-2 rounded-t-2xl rounded-bl-2xl flex gap-2 items-center'>
                    <h3 className=' text-[1.2rem] sm:text-[1.5rem] font-bold'>Lorem ipsum dolor sit</h3>
                    <div className='bg-black w-[20px] h-[20px] rounded-full'>
                        <img src={upicon} className='w-[12px] m-1' alt='up-right-icon'/>
                    </div>
            </div>

        </div>
        
    </div>

    </div>
  )
}
