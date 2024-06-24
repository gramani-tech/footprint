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
    <div className='sm:px-[3.5em] my-[5em] w-[90%] mx-auto'>
        <div className='w-fit'>
        <h2 className='text-[2rem] sm:text-[3rem] font-serif font-[600] relative'>About Us
           <img src={line} alt='line-image' className=' absolute -bottom-1 -z-10'/>
        </h2>
        </div>
        
        <div className='my-8 w-[90%] md:w-full flex-col-reverse md:flex-row flex justify-between'>
            <div className=' bg-white  md:basis-[68%] h-fit p-3 rounded-lg shadow-md drop-shadow-md'>
                <div className='flex justify-between'>
                    <h3 className=' text-[1.5rem] md:text-[2rem] font-[550] '>Lorem ipsum dolor <span className='block leading-4'>sit amet</span></h3>
                    <div className='bg-yellow rounded-full h-[40px] w-[40px]'>
                        <img src={arrow} className='w-[20px] m-2'/>
                    </div>
                </div>
                
                <p className='my-5 text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur. Pellentesque vitae amet dui eget erat. 
                    Porttitor molestie malesuada semper vestibulum et. Viverra pulvinar aliquam libero sed at quis vitae lectus arcu. 
                    Viverra magna a nec aliquet. Cras pharetra vel sed sit scelerisque semper. Cras tortor et tellus lobortis risus.
                </p>
            </div>

            <div className=' md:h-[9em] md:my-10 lg:my-1  md:basis-[40%] lg:basis-[30%] gap-x-1 grid grid-cols-2 grid-flow-dense gap-y-2 p-2 '>
                <img src={frame1} alt='photo' className=' object-cover'/>
                <img src={frame2} alt='photo' className='object-cover'/>
                <img src={frame6} alt='photo' className=' rounded-xl object-cover'/>
                <img src={frame3} alt='photo' className=' object-cover'/>
            </div>

        </div>

        <div className='my-8 w-[90%] md:w-full md:flex justify-between'>
        <div className='md:h-[9em] md:my-10 lg:my-1 md:basis-[40%] lg:basis-[30%] grid grid-cols-2 grid-flow-dense gap-y-2 gap-x-2 p-2 '>
                <img src={frame4} alt='photo' className=' rounded-xl object-cover'/>
                <img src={frame5} alt='photo' className=' rounded-xl object-cover'/>
                <img src={frame7} alt='photo' className=' rounded-xl object-cover'/>
                <img src={frame8} alt='photo' className='rounded-xl object-cover'/>
            </div>

            <div className=' bg-white basis-[68%] h-fit p-3 rounded-lg shadow-md drop-shadow-md'>
                <div className='flex justify-between'>
                    <h3 className=' text-[1.5rem] md:text-[2rem] font-[550] '>Lorem ipsum dolor <span className='block leading-4'>sit amet</span></h3>
                    <div className='bg-yellow rounded-full h-[40px] w-[40px]'>
                        <img src={arrow} className='w-[20px] m-2'/>
                    </div>
                </div>
                
                <p className='my-5 text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur. Pellentesque vitae amet dui eget erat. Porttitor molestie malesuada semper vestibulum et. Viverra pulvinar aliquam libero sed at quis vitae lectus arcu. Viverra magna a nec aliquet. Cras pharetra vel sed sit scelerisque</p>
            </div>

            

        </div>
        
        <div className=' font-serif my-[5em]'>
        <div className='w-fit mx-auto my-5'>
            <h2 className='text-[2rem] sm:text-[3rem] font-serif font-[600] relative'>Services
                <img src={line2} alt='line-image' className=' absolute bottom-1 -z-10'/>
            </h2>
        </div>

        <div className=' mx-auto'>
            <div className='flex justify-center gap-3 md:gap-5 lg:px-10'>
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
