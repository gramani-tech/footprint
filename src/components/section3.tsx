import line1 from '../assets/Line 1.svg'
import line2 from '../assets/Line2.svg'
import avatar from '../assets/Avatar.jpg'
import upicon from '../assets/arrow-up-right.svg'


export default function Section3() {
  return (
    <div className=' w-[100%] my-[3em] mx-auto '>
        <div className='w-full mt-[2em] mb-[5em]'>
            <div className=' w-fit my-5'>
                <h2 className=' text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-platypi font-[600] relative'>FAQS
                    <img src={line1} alt='line-image' className=' absolute bottom-0 -z-10'/>
                </h2>
            </div>

            <div className='w-[90%]  md:w-[70%] my-10 ml-auto  '>
                <div className=' border-b-2 py-4 border-border '>
                <h4 className='font-bold py-3 text-[1.2rem]'>Lorem ipsum dolor</h4>
                <p className='text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur. Nisl volutpat nec in lorem. Ipsum turpis quam mauris quis a bibendum aliquam. Nisi euismod ullamcorper adipiscing ullamcorper odio vel. Ornare sit diam enim commodo. Facilisis odio nibh enim in sed ullamcorper.</p>
                </div>

                <div className=' border-b-2 py-8 border-border '>
                <h4 className='font-bold py-3 text-[1.2rem]'>Lorem ipsum dolor</h4>
                <p className='text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur. Nisl volutpat nec in lorem. Ipsum turpis quam mauris quis a bibendum aliquam. Nisi euismod ullamcorper adipiscing ullamcorper odio vel. Ornare sit diam enim commodo. Facilisis odio nibh enim in sed ullamcorper.</p>
                </div>

                <div className=' border-b-2 py-8 border-border '>
                <h4 className='font-bold py-3 text-[1.2rem]'>Lorem ipsum dolor</h4>
                <p className='text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur. Nisl volutpat nec in lorem. Ipsum turpis quam mauris quis a bibendum aliquam. Nisi euismod ullamcorper adipiscing ullamcorper odio vel. Ornare sit diam enim commodo. Facilisis odio nibh enim in sed ullamcorper.</p>
                </div>

                <div className=' border-b-2 py-8 border-border'>
                <h4 className='font-bold py-3 text-[1.2rem]'>Lorem ipsum dolor</h4>
                <p className='text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur. Nisl volutpat nec in lorem. Ipsum turpis quam mauris quis a bibendum aliquam. Nisi euismod ullamcorper adipiscing ullamcorper odio vel. Ornare sit diam enim commodo. Facilisis odio nibh enim in sed ullamcorper.</p>
                </div>
            </div>
        </div>

        <div>

            <div className='w-fit  my-5'>
                <h2 className=' text-[2rem] md:text-[2.5rem] lg:text-[3rem]] font-platypi font-[600] relative'>Testimonials
                    <img src={line2} alt='line-image' className=' absolute bottom-0 -z-10'/>
                </h2>
            </div>

            <div className='p-1 relative grid sm:grid-cols-2 gap-5 bg-gradient-to-t from-[#210124D1] to-[#00000000] rounded-xl py-[3em]'>
                <div className='bg-white p-4 rounded-2xl shadow-md '>
                    <div className='flex gap-1 item-center my-2'>
                        <img src={avatar} alt='avatar' className=' object-cover w-[30px]'/>
                        <h3 className='font-bold text-[1.1rem]'>Lorem</h3>                 
                    </div>
                    <p className='text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur. Facilisis consequat molestie cras nec lacus turpis lacus egestas diam. Adipiscing turpis lectus adipiscing dolor enim condimentum enim tortor. Tortor.</p>
                </div>

                <div className='bg-white p-4 rounded-2xl shadow-md '>
                    <div className='flex gap-1 item-center my-2'>
                        <img src={avatar} alt='avatar' className=' object-cover w-[30px]'/>
                        <h3 className='font-bold text-[1.1rem]'>Lorem</h3>                 
                    </div>
                    <p className='text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur. Facilisis consequat molestie cras nec lacus turpis lacus egestas diam. Adipiscing turpis lectus adipiscing dolor enim condimentum enim tortor. Tortor.</p>
                </div>
                
                <div className=' opacity-40 bg-gray p-4 rounded-t-xl  '>
                    <div className='flex gap-1 item-center my-2'>
                        <img src={avatar} alt='avatar' className=' object-cover w-[30px]'/>
                        <h3 className='font-bold text-[1.1rem]'>Lorem</h3>                 
                    </div>
                    <p className='text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur. Facilisis consequat molestie cras nec lacus turpis lacus egestas diam. Adipiscing turpis lectus adipiscing dolor enim condimentum enim tortor. Tortor.</p>
                </div>

                <div className=' opacity-40 bg-gray p-4 rounded-t-xl'>
                    <div className='flex gap-1 item-center my-2'>
                        <img src={avatar} alt='avatar' className=' object-cover w-[30px]'/>
                        <h3 className='font-bold text-[1.1rem]'>Lorem</h3>                 
                    </div>
                    <p className='text-[0.9rem]'>Lorem ipsum dolor sit amet consectetur. Facilisis consequat molestie cras nec lacus turpis lacus egestas diam. Adipiscing turpis lectus adipiscing dolor enim condimentum enim tortor. Tortor.</p>
                </div>

                <div className=' bg-white flex absolute left-[25%] sm:left-[40%] cursor-pointer bottom-[15%] rounded-2xl items-center gap-2 px-3 py-1'>
                    <p className='text-[0.9rem] font-bold'>View all Reviews</p>
                    <div className='bg-black w-[20px] h-[20px] rounded-full'>
                        <img src={upicon} className='w-[12px] m-1' alt='up-right-icon'/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
