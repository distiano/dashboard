import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: 'General', link: '/' },

    { title: 'Wedding', link: '/wedding' },
    { title: 'Yearbook', link: '/yearbook' },
    { title: 'Company Profile', link: '/comprovideo' },
    { title: 'Wedding Cinematic', link: '#' },
    {
      title: 'Teams',
      link: '#',
      subItems: [
        { title: 'Banned Users', link: '#' },
        { title: 'Calendar', link: '#' },
      ],
    },
    {
      title: 'Account',
      link: '#',
      subItems: [
        { title: 'Details', link: '#' },
        { title: 'Security', link: '#' },
      ],
    },
  ];

  return (
    <header className="">
      <div className="mx-auto max-w-screen-xl ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <div className="block ">
              <button className="rounded bg-gray-100  text-gray-600 transition hover:text-gray-600/75" onClick={() => setMobileMenuOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-4/5 overflow-y-auto bg-[#212631] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 animate-slideIn">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <h3 className="text-3xl font-normal text-white">Andana.</h3>{' '}
                </a>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-white" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <IoClose className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6 ">
                    <ul className="mt-6 space-y-1">
                      {menuItems.map((item, index) => (
                        <li key={index}>
                          {item.subItems ? (
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700">
                                <span className="text-sm font-medium">{item.title}</span>
                                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                                </span>
                              </summary>
                              <ul className="mt-2 space-y-1 px-4">
                                {item.subItems.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <a href={subItem.link} className="block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700">
                                      {subItem.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </details>
                          ) : (
                            <a href={item.link} className="block rounded-lg  px-4 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-gray-700">
                              {item.title}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>

          <div className="md:flex md:items-center md:gap-12">
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-2   ">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs hidden lg:block">
                    <strong className="block font-medium ">Eric Frusciante</strong>
                    <span> eric@frusciante.com </span>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
