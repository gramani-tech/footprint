

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react'
import {
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = {
 
  pages: [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Talents', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Policy', href: '#' },
  ],
}

type Props ={
  open:boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export default function MobileNav({setOpen,open}: Props) {
  

  return (
    <div className="bg-white transition-all">
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

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900 font-platypi">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

        
          </DialogPanel>
        </div>
      </Dialog>

      
    </div>
  )
}
