import line1 from '../assets/Line 1.svg'
import line2 from '../assets/Line2.svg'
import avatar from '../assets/Avatar.jpg'
import upicon from '../assets/arrow-up-right.svg'


export default function Section3() {
    const faqs = [
        {
            title: 'What is Footprint Mentorship?',
            content: 'Footprint Mentorship is a personalized, paid mentorship program designed to help tech professionals secure new job roles faster by providing comprehensive support throughout the job application process.'
        },
        {
            title: 'Who can join Footprint Mentorship?',
            content: 'Our mentorship program is tailored for tech professionals,junior, mid-career individuals, recent graduates tech tech bootcamp, and those looking to advance or change their careers within the tech industry.'
        },
        {
            title: 'How does Footprint Mentorship work?',
            content: 'Footprint Mentorship offers personalized one-on-one coaching, structured job application guidance, detailed feedback mechanisms, and access to a supportive community. Mentees receive tailored advice and resources to enhance their job search strategy and improve their chances of securing a job offer.'
        },
        
        {
            title: 'How much does Footprint Mentorship cost?',
            content: 'We offer various pricing packages to cater to different needs and budgets: check out our pricing page for more information. We also offer a free trial package for those who want to experience our services before committing to a paid plan.'
        },
        {
            title: 'How do I get started with Footprint Mentorship?',
            content: 'To get started, simply visit our website and sign up for the package that best suits your needs. After signing up, you will be send  a welcome email.'
        },
     
     
        {
            title: 'How do you ensure the quality of your mentorship program?',
            content: 'We continuously monitor and evaluate our mentorship program through feedback from mentees and mentors. We also use data-driven methods to track progress and refine our strategies to ensure the highest quality of service.'
        },
        {
            title: 'What is the duration of the mentorship program?',
            content: 'The duration of the mentorship program varies depending on the package you choose and your individual career goals. We offer flexible mentorship plans that can be tailored to meet your specific needs.'
        },
        {
            title: 'What kind of support can I expect from the community?',
            content: 'Our community provides a platform for networking, knowledge sharing, and peer support. You will have the opportunity to connect with other tech professionals, share experiences, and gain insights from industry experts.'
        },
        {
            title: 'How do I track my progress?',
            content: 'We provide tools and resources to help you track your job application progress, interview outcomes, and overall performance. Regular feedback from your mentor will also help you identify areas for improvement and adjust your strategy accordingly.'
        },
        {
            title: 'What sets Footprint Mentorship apart from other career coaching services?',
            content: 'Footprint Mentorship offers a deeply personalized approach, tailored to the unique needs and goals of each mentee. Our founder’s extensive network, data-driven methods, and comprehensive support system ensure that you receive high-quality mentorship and achieve your career aspirations more efficiently.'
        },
        {
            title: 'How can I contact Footprint Mentorship for more information?',
            content: 'You can contact us through our website’s contact form, email us at [insert contact email], or connect with us on our social media platforms [insert social media links]. We are here to answer any questions you may have and provide additional information about our services.'
        }
    ]


    return (
        <div className=' w-[100%] my-[3em] mx-auto text-black'>
            <div>

                <div className='w-fit  my-5'>
                    <h2 className=' text-[2rem] md:text-[2.5rem] lg:text-[3rem]] font-platypi font-[600] relative'>Testimonials
                        <img src={line2} alt='line-image' className=' absolute bottom-0 -z-10' />
                    </h2>
                </div>

                <div className='p-1 text-[1rem] relative grid sm:grid-cols-2 gap-5 bg-gradient-to-t from-[#210124D1] to-[#00000000] rounded-xl py-[3em]'>
                    <div className='bg-white p-4 rounded-2xl shadow-md '>
                        <div className='flex gap-1 item-center my-2'>
                            <img src={avatar} alt='avatar' className=' object-cover w-[30px]' />
                            <h3 className='font-bold text-[1.1rem]'>Lorem</h3>
                        </div>
                        <p className=''>Lorem ipsum dolor sit amet consectetur. Facilisis consequat molestie cras nec lacus turpis lacus egestas diam. Adipiscing turpis lectus adipiscing dolor enim condimentum enim tortor. Tortor.</p>
                    </div>

                    <div className='bg-white p-4 rounded-2xl shadow-md '>
                        <div className='flex gap-1 item-center my-2'>
                            <img src={avatar} alt='avatar' className=' object-cover w-[30px]' />
                            <h3 className='font-bold text-[1.1rem]'>Lorem</h3>
                        </div>
                        <p className=''>Lorem ipsum dolor sit amet consectetur. Facilisis consequat molestie cras nec lacus turpis lacus egestas diam. Adipiscing turpis lectus adipiscing dolor enim condimentum enim tortor. Tortor.</p>
                    </div>

                    <div className=' opacity-40 bg-gray p-4 rounded-t-xl  '>
                        <div className='flex gap-1 item-center my-2'>
                            <img src={avatar} alt='avatar' className=' object-cover w-[30px]' />
                            <h3 className='font-bold text-[1.1rem]'>Lorem</h3>
                        </div>
                        <p className=''>Lorem ipsum dolor sit amet consectetur. Facilisis consequat molestie cras nec lacus turpis lacus egestas diam. Adipiscing turpis lectus adipiscing dolor enim condimentum enim tortor. Tortor.</p>
                    </div>

                    <div className=' opacity-40 bg-gray p-4 rounded-t-xl'>
                        <div className='flex gap-1 item-center my-2'>
                            <img src={avatar} alt='avatar' className=' object-cover w-[30px]' />
                            <h3 className='font-bold text-[1.1rem]'>Lorem</h3>
                        </div>
                        <p className=''>Lorem ipsum dolor sit amet consectetur. Facilisis consequat molestie cras nec lacus turpis lacus egestas diam. Adipiscing turpis lectus adipiscing dolor enim condimentum enim tortor. Tortor.</p>
                    </div>

                    <div className=' bg-white flex absolute left-[25%] sm:left-[40%] cursor-pointer bottom-[15%] rounded-2xl items-center gap-2 px-3 py-1'>
                        <p className='font-bold'>View all Reviews</p>
                        <div className='bg-black w-[20px] h-[20px] rounded-full'>
                            <img src={upicon} className='w-[12px] m-1' alt='up-right-icon' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mt-[2em] mb-[5em]'>
                <div className=' w-fit my-5'>
                    <h2 className=' text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-platypi font-[600] relative'>FAQS
                        <img src={line1} alt='line-image' className=' absolute bottom-0 -z-10' />
                    </h2>
                </div>

                <div className='w-[90%] text-[1rem] md:w-[70%] my-10 ml-auto  '>
                    {
                        faqs.map(faq => (
                            <div className=' border-b-2 py-4 border-border '>
                                <h4 className='font-[900] py-3 text-[25px] '>{faq.title}</h4>
                                <p className=' font-normal'>{faq.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>



        </div>
    )
}
