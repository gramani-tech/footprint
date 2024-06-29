import icon from '../assets/icon.svg'
import icon1 from '../assets/icon (1).svg'

export default function Waitlist() {
  return (
    <div className=" w-[100%] mx-auto rounded-md bg-yellow md:flex justify-between p-5">
        <div className=" md:translate-y-[30%] mb-5">
            <h2 className="text-[2rem] font-platypi font-bold">Contact us</h2>
            <p>Send us an email.</p>
        </div>
        <div className="md:w-[40%]  py-3 md:p-3">
          <div className='relative'>
              <input type="text" placeholder="Full Name" className="placeholder:opacity-70 outline-none pl-10  my-2 block p-2 w-full"/>
              <img src={icon} className='absolute bottom-3 left-2'/>
          </div>
            
          <div className='relative'>
            <input type="text" placeholder="Email Address" className=" my-2 block p-2 pl-10 w-full outline-none placeholder:opactity-70"/>
            <img src={icon1} className='absolute bottom-3 left-2'/>
          </div>
          <textarea name="" id="" className='w-full h-[150px]  p-2'  placeholder='Your message here'></textarea>
            
            <button className="w-full text-white p-2 my-2 bg-text">Send</button>
        </div>
    </div>
  )
}
