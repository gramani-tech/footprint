
import { useState } from 'react'
import logo from '../assets/logo png 1.svg'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
 
} from '@headlessui/react'
import {
  // Bars3Icon, 
  XMarkIcon,
} from '@heroicons/react/24/outline'


export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog className="relative z-40 lg:hidden" open={open} onClose={setOpen}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6 font-platypi">
             
            <h2>Home</h2>
             <h2>About Us</h2>
            <h2>Talents</h2>
            <h2>Contact Us</h2>
            <h2>Policy</h2>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6 font-platypi">
              <div className="flow-root">
              <button className=' px-3  bg-yellow border-0 py-2 md:my-2 font-bold '>Get Started</button>
              </div>
            </div>

          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative">
        <nav aria-label="Top">

          <div className="bg-white">
            <div className="mx-auto max-w-7xl md:px-[2.5em] px-[10px] sm:px-[6em]">
              <div className="">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="flex  items-center">
                      <span className="sr-only">Your Company</span>
                      <img
                        className=" w-[150px]"
                        src={logo}
                        alt=""
                      />
                   
                  </div>

                  {/* <ul className={`text-[1.1rem] md:text-[1rem] py-5 hidden lg:flex gap-10`}>
                    <li className='font-bold'>Home</li>
                    <li>About Us</li>
                    <li>Talents</li>
                    <li>Contact Us</li>
                    <li>Policy</li>
                </ul> */}

                <button className=' px-3  bg-yellow border-0 py-2 my-2 font-bold  rounded-[6px]'>Get Started</button>
                  {/* Mobile menu (lg-) */}
                  {/* <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div> */}

                  {/* Logo (lg-) */}
                  {/* <a href="#" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <img
                      src={logo}
                      alt=""
                      className=" w-[8em]"
                    />
                  </a> */}

                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
