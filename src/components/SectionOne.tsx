import image from '../assets/Auto Layout Vertical.jpg'
import { ReactTyped } from "react-typed";

export default function SectionOne() {
  const textArr = ["streamline your job search process.", "track and improve your interview performance.", "enhance your job  success rates.", "reduce the time it takes you to secure a new role."]
  return (
    <div className=' my-7 pt-10'>
      <div className='text-center mt-4'>
        <h2 className=' font-platypi text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] font-[700] leading-[1.1em]  max-w-[700px] mx-auto text-yellow h-[150px] mt-4'> We <span className='text-black'><ReactTyped loop strings={textArr} typeSpeed={100} backSpeed={50} backDelay={8800} />  </span>
          {/* track and improve your interview performance, enhance job your success rates, and reduce the time it takes to secure a new role  */}
        </h2>

        {/* <p className='py-2'>Be the first to know when we officially launch.</p> */}
        <button className=' m-2 bg-yellow p-2 font-bold mt-7 rounded-[6px] text-black'>Get Started</button>
      </div>

      <div className=' w-[100%] mx-auto mt-4'>
        <img src={image} alt='corporate worker-image' className='mx-auto' />
      </div>

    </div>
  )
}
