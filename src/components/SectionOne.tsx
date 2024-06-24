import image from '../assets/Auto Layout Vertical.jpg'

export default function SectionOne() {
  return (
    <div className='px-[1em] sm:px-[3.5em] my-10'>
        <div className='text-center'>
            <h2 className=' font-serif text-[2.5rem] md:text-[3.5rem] font-[600] leading-[1.1em]'> Lorem ipsum dolor <span className='block'>sit amet consectetur</span> </h2>
            <p className='py-2'>Be the first to know when we officially launch.</p>
            <button className=' m-2 bg-yellow p-2 font-bold'>Get Started</button>
        </div>

        <div className='m-2 w-[90%] mx-auto'>
            <img src={image} alt='corporate wroker-image'/> 
        </div>
        
    </div>
  )
}
