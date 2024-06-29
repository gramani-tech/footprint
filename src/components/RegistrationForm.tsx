
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

const RegistrationForm = ({ isOpen, setIsOpen }: any) => {


  return (
    // <dsiv className='w-[90vw] overflow-scroll'>

    <Dialog className="relative z-40 " open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear"
      />

      <div className="fixed inset-0 z-40 flex items-center justify-center">
        <DialogPanel
          transition
          className="relative lg:w-full w-[90vw] h-[90vh] lg:h-[700px] overflow-scroll max-w-2xl transform  rounded-lg bg-yellow p-6 shadow-xl transition-all"
        >
          <div className="flex justify-end">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-4">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSenI_CH67M-eVggZd0jTGX115J2zCh3gjp544quW8orf33JeQ/viewform?embedded=true"
              width="640"
              height="1171"
            // frameBorder="0"
            // marginHeight="0"
            // marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
    // </dsiv>
  );
};

export default RegistrationForm;
