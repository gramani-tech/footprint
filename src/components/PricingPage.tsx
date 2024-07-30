import { useState } from 'react';
import line from '../assets/Line 1.svg'
import Mark from '../assets/mark.png'

const currencySymbols = {
  naira: '₦',
  dollar: '$'
};
const packages = [
  {
    title: "COMPLIMENTARY",
    type: "free",
    priceNaira: "Free",
    priceDollar: "Free",
    features: [
      // "30 minutes free session with a mentor",
      "Join a Tech Community",
      "Have access to general jobs opportunity",
      "General dedicated community training/events"
    ]
  },
  {
    title: "SILVER PACKAGE",
    type: "experience",
    priceNaira: "50,000",
    priceDollar: "39",
    duration: "month duration",
    features: [
      "Job application guidance",
      "Interview guidance",
      "Performance tracking and feedback",
      "Resume review by an expert",
      "LinkedIn review and optimization",
      "Weekly access to a mentor",
      "Join a Tech Community"
    ]
  },
  {
    title: "DIAMOND PACKAGE",
    type: "experience",
    priceNaira: "140,000",
    priceDollar: "99",
    duration: "3 months duration",
    features: [
      "Job application guidance",
      "Interview guidance",
      "Performance tracking and feedback",
      "Resume review by an expert",
      "LinkedIn review and optimization",
      "Weekly access to a mentor",
      "Join a Tech Community",
      "One-on-one session with a therapist",
      "On demand mock interview",
      "Access to a career coach"
    ]
  },
  {
    title: "GOLD PACKAGE",
    type: "experience",
    priceNaira: "250,000",
    priceDollar: "170",
    duration: "6 months duration",
    features: [
      "Job application guidance",
      "Interview guidance",
      "Performance tracking and feedback",
      "Resume review by an expert",
      "LinkedIn review and optimization",
      "Weekly access to a mentor",
      "On demand mock interview",
      "Join a Tech Community",
      "Access to a career coach",
      "Job recommendation opportunity"
    ]
  },
  {
    title: "INTERNSHIP PACKAGE",
    type: "internship",
    priceNaira: "100,000",
    priceDollar: "65",
    duration: "6 months duration",
    features: [
      "Job application guidance",
      "Interview guidance",
      "Performance tracking and feedback",
      "Periodic Resume review by an expert",
      "Access to a mentor",
      "Access to real world live project",
      "Expert code review",
      "Data structure and algorithm tasks",
      "Access to a vibrant Tech Community",
      "Access to a career coach",
      "Agile and leadership training",
      "Access to career path resources",
      "Job recommendation opportunity"
    ]
  }
];




const PricingPage = () => {
  const [selectedPackage, setSelectedPackage] = useState('experience');
  const [priceIn, setPriceIn] = useState('naira');

  const filterPackages = packages.filter((item) => item.type === selectedPackage);

  return (
    <div className="py-12">
      <div className=' font-platypi mb-10'>
        <div className='w-fit mx-auto my-5'>
          <h2 className='text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-[600] relative'>Our Pricing Plans
            <img src={line} alt='line-image' className=' absolute bottom-[-25px] -z-10' />
          </h2>
        </div>
        <div className="flex  w-[100%] bg-[#EDEAE8] rounded-[6px] md:w-[500px] mx-auto mt-10 px-1 md:px-2  justify-between">
          <button onClick={() => setSelectedPackage("experience")} className={`${selectedPackage === "experience" ? "bg-white text-black px-8" : "bg-transparent text-[#c3c3c3]"} border-0 py-1 md:my-2 font-bold px-3 rounded-[6px] `}>Experience</button>
          <button onClick={() => setSelectedPackage("internship")} className={`${selectedPackage === "internship" ? "bg-white text-black px-8" : "bg-transparent text-[#c3c3c3]"} border-0 py-1 md:my-2 font-bold px-3 rounded-[6px] `}>Internship</button>
          <button onClick={() => setSelectedPackage("free")} className={`${selectedPackage === "free" ? "bg-white text-black px-8" : "bg-transparent text-[#c3c3c3]"} border-0 py-1 md:my-2 font-bold px-3 rounded-[6px] `}>Free</button>
        </div>

        <div className="flex  w-[100%] bg-[#EDEAE8] rounded-[6px] md:w-[300px] mx-auto mt-10 text-[#101928] align-middle items-center justify-center">
          <div className="">
            <label className="inline-flex items-center mb-5 cursor-pointer text-[20px] mt-5">
              <span className="ms-3  mr-4 font-bold text-gray-900 dark:text-gray-300">Naira</span>
              <input type="checkbox" value="" className="sr-only peer" checked={priceIn !== "naira"} onChange={() => setPriceIn(priceIn === "naira" ? "dollar" : "naira")} />
              <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 bg-[#3E485B] peer-checked:bg-blue-600"></div>
              <span className="ms-3 ml-4 font-bold text-gray-900 dark:text-gray-300">Dollars</span>
            </label>
          </div>
        </div>

      </div>
      <div className="container mx-auto px-4">
        {/* <h1 className="text-4xl font-bold text-center mb-12">Our Pricing Plans</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterPackages.map((pkg, index) => (
            <div key={index} style={{ border: pkg.title == "DIAMOND PACKAGE" ? "2px solid #EECE12" : "2px solid #E5E7EB" }} className={`${pkg.title == "DIAMOND PACKAGE" ? "border-[#EECE12] " : "border-[#E5E7EB] border-2"}bg-white border-2 text-black p-6 rounded-lg shadow-lg  `}>
              <h2 className="text-2xl font-bold mb-4">{pkg.title}</h2>
              <span className="text-[45px] font-semibold ">{currencySymbols[priceIn as keyof typeof currencySymbols]} {priceIn === 'naira' ? pkg.priceNaira : pkg.priceDollar}</span>
              {pkg.duration && <span className="text-md font-medium mb-4 text-[#9CA3AF]"> /{pkg.duration}</span>}
              <ul className=" list-inside ">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="mb-2 flex">
                    <div className="mr-2">

                      <img src={Mark} alt="mark" className='' />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;