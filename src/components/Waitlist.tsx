
export default function Waitlist() {
  return (
    <div className=" w-[82%] mx-auto rounded-md bg-yellow sm:flex justify-between p-5">
        <div className=" md:translate-y-[30%] mb-5">
            <h2 className="text-[2rem] font-serif font-bold">Join The Waitlist!</h2>
            <p>Be the first to know when we officially launch.</p>
        </div>
        <div className="md:w-[40%] sm:w-[50%] py-3 sm:p-3">
            <input type="text" placeholder="full Name" className=" my-2 block p-2 w-full"/>
            <input type="text" placeholder="Email Address" className=" my-2 block p-2 w-full"/>
            <button className="w-full text-white p-2 my-2 bg-black">Submit</button>
        </div>
    </div>
  )
}
