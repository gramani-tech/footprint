import { useState } from 'react';
import line from '../assets/Line 1.svg'

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
    duration: "1 month DURATION (access to a mentor)",
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
    duration: "3 month DURATION (access to a mentor)",
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
    priceNaira: "80,000 with 10% of 3 months salary",
    priceDollar: "69 with 10% of 3 months salary",
    duration: "Premium (till mentee land a Job)",
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
    price: "100,000",
    duration: "6 month DURATION (access to a mentor)",
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
        <div className="flex border w-[100%] border-gray rounded-[6px] md:w-[400px] mx-auto mt-10 px-1 md:px-5 py-2 justify-between">
          <button onClick={() => setSelectedPackage("experience")} className={`${selectedPackage === "experience" ? "bg-yellow " : "bg-gray"} border-0 py-2 md:my-2 font-bold px-3 rounded-[6px] text-white`}>Experience</button>
          <button onClick={() => setSelectedPackage("internship")} className={`${selectedPackage === "internship" ? "bg-yellow " : "bg-gray"} border-0 py-2 md:my-2 font-bold px-3 rounded-[6px] text-white`}>Internship</button>
          <button onClick={() => setSelectedPackage("free")} className={`${selectedPackage === "free" ? "bg-yellow " : "bg-gray"} border-0 py-2 md:my-2 font-bold px-3 rounded-[6px] text-white`}>Free</button>
        </div>

        <div className="flex  w-[100%] bg-[#54E3EA] rounded-[6px] md:w-[300px] mx-auto mt-10 px-1 md:px-5 py-2 justify-between">
          <button onClick={() => setPriceIn("naira")} className={`${priceIn === "naira" ? "bg-yellow " : " bg-gray"} border-0 py-1 md:my-2 font-bold px-3 rounded-[6px] text-white`}>Naira (NGN)</button>
          <button onClick={() => setPriceIn("dollar")} className={`${priceIn === "dollar" ? "bg-yellow " : "bg-gray"} border-0 py-1 md:my-2 font-bold px-3 rounded-[6px] text-white`}>Dollar (USD)</button>

        </div>

      </div>
      <div className="container mx-auto px-4">
        {/* <h1 className="text-4xl font-bold text-center mb-12">Our Pricing Plans</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterPackages.map((pkg, index) => (
            <div key={index} className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">{pkg.title}</h2>
              <p className="text-xl font-semibold mb-4">{currencySymbols[priceIn as keyof typeof currencySymbols]} {priceIn === 'naira' ? pkg.priceNaira : pkg.priceDollar}</p>
              {pkg.duration && <p className="text-md font-medium mb-4">{pkg.duration}</p>}
              <ul className="list-disc list-inside">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">{feature}</li>
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