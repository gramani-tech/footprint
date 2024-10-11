import line1 from "../assets/Line 1.svg";
import line2 from "../assets/Line2.svg";
import { Collapse } from "antd";

export default function Section3() {
  const faqs = [
    {
      key: 1,
      label: "What is Footprint Mentorship?",
      children:
        "Footprint Mentorship is a personalized, paid mentorship program designed to help tech professionals secure new job roles faster by providing comprehensive support throughout the job hunting process.",
    },
    {
      key: 2,
      label: "Who can join Footprint Mentorship?",
      children:
        "Our mentorship program is tailored for tech professionals, junior, mid-career individuals, recent tech bootcamp graduates, and those looking to advance or change their careers within the tech industry.",
    },
    {
      key: 3,
      label: "How does Footprint Mentorship work?",
      children:
        "Footprint Mentorship offers personalized one-on-one coaching, structured job application guidance, detailed feedback mechanisms, and access to a supportive community. Mentees receive tailored advice and resources to enhance their job search strategy and improve their chances of securing a job offer.",
    },

    {
      key: 4,
      label: "How much does Footprint Mentorship cost?",
      children:
        "We offer various pricing packages to cater to different needs and budgets: check out our pricing page for more information. We also offer a free trial package for those who want to experience our services before committing to a paid plan.",
    },
    {
      key: 5,
      label: "How do I get started with Footprint Mentorship?",
      children:
        "To get started, simply visit our website and sign up for the package that best suits your needs. After signing up, you will be sent  a welcome email.",
    },

    {
      key: 6,
      label: "How do you ensure the quality of your mentorship program?",
      children:
        "We continuously monitor and evaluate our mentorship program through feedback from mentees and mentors. We also use data-driven methods to track progress and refine our strategies to ensure the highest quality of service.",
    },
    {
      key: 7,
      label: "What is the duration of the mentorship program?",
      children:
        "The duration of the mentorship program varies depending on the package you choose and your individual career goals. We offer flexible mentorship plans that can be tailored to meet your specific needs.",
    },
    {
      key: 8,
      label: "What kind of support can I expect from the community?",
      children:
        "Our community provides a platform for networking, knowledge sharing, and peer support. You will have the opportunity to connect with other tech professionals, share experiences, and gain insights from industry experts.",
    },
    {
      key: 9,
      label: "How do I track my progress?",
      children:
        "We provide tools and resources to help you track your job application progress, interview outcomes, and overall performance. Regular feedback from your mentor will also help you identify areas for improvement and adjust your strategy accordingly.",
    },
    {
      key: 10,
      label:
        "What sets Footprint Mentorship apart from other career coaching services?",
      children:
        "Footprint Mentorship offers an intensive personalized approach, tailored to the unique needs and goals of each mentee. Our founder’s extensive network, data-driven methods, and comprehensive support system ensure that you receive high-quality mentorship and achieve your career aspirations more efficiently.",
    },
    {
      key: 11,
      label: "How can I contact Footprint Mentorship for more information?",
      children: (
        <div
          dangerouslySetInnerHTML={{
            __html:
              "You can contact us through our website’s contact form, email us at <a href='mailto:contact@footprintmentorship.com'>contact@footprintmentorship.com</a>, or connect with us on our social media platforms: <a href='https://linkedin.com/company/footprintmentorship' target='_blank'>LinkedIn</a>, <a href='https://twitter.com/footprintmentorship' target='_blank'>Twitter</a>. We are here to answer any questions you may have and provide additional information about our services.",
          }}
        />
      ),
    },
  ];

  const testimonnials = [
    {
      name: "Joy Ajiboye",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQHR4Ogw4zyrqQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721851199584?e=1733961600&v=beta&t=8gKaTW_C4Qp0l9ij3oOPrIaiIKqiBhenxwTiTlutEfo",
      testimony:
        "The founder of Footprint Mentorship has played a significant role in my career. He worked closely with me to refine my resume, making it stand out to potential employers. His personalized mentorship was invaluable, offering tailored guidance that significantly boosted my confidence and preparedness for interviews. He actively shared job opportunities that opened doors to new possibilities. I highly recommend Footprint Mentorship to anyone seeking to advance their career in tech.",
    },
    {
      name: "Emmanuel Chidera",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D35AQGbx6-biqEYyA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1727428774773?e=1729224000&v=beta&t=SSnY6MiKuf462hY_KKej3Mr2cyYN6jslrBYwuevYSKI",
      testimony:
        "My experience with Footprint was truly transformative. I was at a crossroads, unsure whether to learn a new programming language or stick with what I already knew. The Boss of Footprint advised me to focus on gaining work experience instead of learning a new language. This advice became a guiding principle for me, leading to the completion of multiple projects using my existing skills. Footprint provided me with invaluable mentorship and interview preparation. They also revamped my CV, making it exceptional. Since I joined Footprint Mentorship, I have secured several job opportunities.",
    },
    {
      name: "Grace Effiong",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQH0sEiOOVbhsQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709816186435?e=1733961600&v=beta&t=AJFgaUSyF2ZuhTJYlhSo4vrxJoP2-dl4dffqfThcLU0",
      testimony:
        "Ever wondered what your next step would be? So confused about your career choices? That was me before finding a mentor. Thanks to Footprint mentorship, I've gained clarity and confidence. I now enjoy a stable job and have received several job offers, which I've been able to decline or postpone respectfully. Joining Footprint was truly the best career decision I've made.",
    },

    {
      name: "Samuel Soyebo",
      avatar:
        "https://media.licdn.com/dms/image/v2/D4D35AQG9ybMYJE2PtQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1708646780761?e=1729224000&v=beta&t=vUlKlFCG9o5WBVbHX2PHrFjgAvTjWIKMvsmWl8NMMlc",
      testimony:
        "I am profoundly grateful to the founder of the Footprint Mentorship Program, who provided a beacon of hope when I was at my lowest. Frustrated and ready to give up on my tech career, I found a mentor who painted a vivid canvas of possibilities and taught me to see opportunities where none seemed to exist. Throughout this journey, the founder's unwavering support and encouragement were a lifeline. He meticulously prepared me technically and for interviews, and went above and beyond by actively sharing job opportunities with me. His guidance was instrumental in transforming my despair into determination and my dreams into reality. To anyone contemplating a career in tech, I wholeheartedly recommend the Footprint Mentorship Program. Don't think twice, embrace this opportunity and embark on a path that you won't regret. Remember, little drops of water make a mighty ocean.",
    },
  ];

  return (
    <div className=" w-[100%] my-[10em] mx-auto text-black">
      <div>
        <div className="w-fit  my-1">
          <h2 className=" text-[2rem] md:text-[2.5rem] lg:text-[3rem]] font-platypi font-[600] relative">
            Testimonials
            <img
              src={line2}
              alt="line-image"
              className=" absolute bottom-0 -z-10"
            />
          </h2>
        </div>

        <div className="p-1 text-[1rem] relative grid sm:grid-cols-2 gap-5 bg-gradient-to-t from-[#210124D1] to-[#00000000] rounded-xl py-[3em] hover:shadow-lg">
          {testimonnials.map((testimony, index) => (
            <div
              className={`${
                index === 0
                  ? "bg-white opacity-100"
                  : "bg-white md:bg-gray md:opacity-40"
              } hover:bg-white  hover:opacity-100 p-4 rounded-2xl shadow-md   cursor-pointer `}
              key={testimony.name}
            >
              <div className="flex gap-1 item-center my-2">
                <img
                  src={testimony.avatar}
                  alt="avatar"
                  className=" object-cover w-[30px] rounded-full"
                />
                <h3 className="font-bold text-[1.1rem]">{testimony.name}</h3>
              </div>
              <p className="">{testimony.testimony}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-[10em] mb-[5em]">
        <div className=" w-fit my-5">
          <h2 className=" text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-platypi font-[600] relative">
            FAQS
            <img
              src={line1}
              alt="line-image"
              className=" absolute bottom-0 -z-10"
            />
          </h2>
        </div>

        <div className="w-[90%] text-[1rem] md:w-[70%] my-10 ml-auto  ">
          <Collapse
            items={faqs}
            defaultActiveKey={["1"]}
            expandIconPosition="right"
            accordion
          />
        </div>
      </div>
    </div>
  );
}
