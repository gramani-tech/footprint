import line1 from '../assets/Line 1.svg'
import line2 from '../assets/Line2.svg'
import avatar from '../assets/Avatar.jpg'


export default function Section3() {
    const faqs = [
        {
            title: 'What is Footprint Mentorship?',
            content: 'Footprint Mentorship is a personalized, paid mentorship program designed to help tech professionals secure new job roles faster by providing comprehensive support throughout the job hunting process.'
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
                    <div className='hover:bg-white  hover:opacity-100 p-4 rounded-2xl shadow-md opacity-40 bg-gray '>
                        <div className='flex gap-1 item-center my-2'>
                            <img src="https://media.licdn.com/dms/image/D5603AQG91Kz3vvM-MQ/profile-displayphoto-shrink_400_400/0/1678467075459?e=1726099200&v=beta&t=es_SLhG2B0wsWI-_9zBuekG-34PYZm-NMoeH0BsU3D4" alt='avatar' className=' object-cover w-[30px] rounded-full' />
                            <h3 className='font-bold text-[1.1rem]'>Joy Ajiboye</h3>
                        </div>
                        <p className=''>
                            The founder of Footprint Mentorship has played a significant role in my career. He worked closely with me to refine my resume, making it stand out to potential employers. His personalized mentorship was invaluable, offering tailored guidance that significantly boosted my confidence and preparedness for interviews. He actively shared job opportunities that opened doors to new possibilities. I highly recommend Footprint Mentorship to anyone seeking to advance their career in tech.
                        </p>
                    </div>

                    <div className='hover:bg-white  hover:opacity-100 p-4 rounded-2xl shadow-md opacity-40 bg-gray '>
                        <div className='flex gap-1 item-center my-2'>
                            <img src='https://media.licdn.com/dms/image/D4D03AQEA5eyoxO0Ang/profile-displayphoto-shrink_400_400/0/1715068900949?e=1726099200&v=beta&t=nimxhcsBB91YNr9QNcGtFLO-cqdirv1eMZBLgRFUpmk' alt='avatar' className=' object-cover w-[30px] rounded-full' />
                            <h3 className='font-bold text-[1.1rem]'>Emmanuel Chidera</h3>
                        </div>
                        <p className=''>My experience with Footprint was truly transformative. I was at a crossroads, unsure whether to learn a new programming language or stick with what I already knew. The Boss of Footprint advised me to focus on gaining work experience instead of learning a new language. This advice became a guiding principle for me, leading to the completion of multiple projects using my existing skills.

                            Footprint provided me with invaluable mentorship and interview preparation. They also revamped my CV, making it exceptional. Since joined Footprint Mentorship, I have secured several job opportunities.
                        </p>
                    </div>

                    <div className='hover:bg-white  hover:opacity-100 p-4 rounded-2xl shadow-md opacity-40 bg-gray  '>
                        <div className='flex gap-1 item-center my-2'>
                            <img src="https://media.licdn.com/dms/image/D4D03AQH0sEiOOVbhsQ/profile-displayphoto-shrink_400_400/0/1709816186435?e=1726099200&v=beta&t=JQnWiVn5o2BORiyGuKgeEpNaJGql0zxNUiGbx90v6XY" alt='avatar' className=' object-cover w-[30px] rounded-full' />
                            <h3 className='font-bold text-[1.1rem]'>Grace Effiong</h3>
                        </div>
                        <p className=''>
                            Ever wondered what your next step would be? So confused about your career choices? That was me before finding a mentor. Thanks to Footprint mentorship, I've gained clarity and confidence. I now enjoy a stable job and have received several job offers, which I've been able to decline or postpone respectfully. Joining Footprint was truly the best career decision I've made.
                        </p>
                    </div>

                    <div className='hover:bg-white  hover:opacity-100 p-4 rounded-2xl shadow-md opacity-40 bg-gray'>
                        <div className='flex gap-1 item-center my-2'>
                            <img src={avatar} alt='avatar' className=' object-cover w-[30px] rounded-full' />
                            <h3 className='font-bold text-[1.1rem]'>Lorem</h3>
                        </div>
                        <p className=''>Lorem ipsum dolor sit amet consectetur. Facilisis consequat molestie cras nec lacus turpis lacus egestas diam. Adipiscing turpis lectus adipiscing dolor enim condimentum enim tortor. Tortor.</p>
                    </div>

                    {/* <div className=' bg-white flex absolute left-[25%] sm:left-[40%] cursor-pointer bottom-[15%] rounded-2xl items-center gap-2 px-3 py-1'>
                        <p className='font-bold'>View all Reviews</p>
                        <div className='bg-black w-[20px] h-[20px] rounded-full'>
                            <img src={upicon} className='w-[12px] m-1' alt='up-right-icon' />
                        </div>
                    </div> */}
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
