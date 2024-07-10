// import Nav from "./components/Nav"
import SectionOne from "./components/SectionOne"
import AboutUs from "./components/AboutUs"
import Section3 from "./components/section3"
import Waitlist from "./components/Waitlist"
import Footer from "./components/Footer"
import MobileNav from "./components/mobilenav"
import PricingPage from "./components/PricingPage"
// import RegistrationForm from "./components/RegistrationForm"



function App() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" text-text">
      {/* <div className="bg-yellow p-2 text-center font-bold"><h2>200 days to launch! <span className=" pl-3 text-[1.2rem]">Support us</span></h2></div> */}
      {/* <Nav/> */}
      <MobileNav  />

      <div className="px-[1em] md:px-[7em]">
        <SectionOne  />
        <AboutUs />
        <PricingPage />
        <Section3 />
        <Waitlist />
        {/* {isOpen && <RegistrationForm />} */}
        <Footer />

      </div>

    </div>
  )
}

export default App
