import image from '../assets/Auto Layout Vertical.jpg'

export default function SectionOne() {
  return (
    <div className=' my-7'>
        <div className='text-center'>
            <h2 className=' font-platypi text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] font-[600] leading-[1.1em]'> Lorem ipsum dolor <span className='block'>sit amet consectetur</span> </h2>
            <p className='py-2'>Be the first to know when we officially launch.</p>
            <button className=' m-2 bg-yellow p-2 font-bold'>Get Started</button>
        </div>

        <div className='m-2 w-[100%] mx-auto'>
            <img src={image} alt='corporate worker-image'/> 
        </div>
        
    </div>
  )
}
