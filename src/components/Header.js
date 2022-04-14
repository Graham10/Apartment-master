import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Properties', href: '/property' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },

]

function Header() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate()
  const transitionNavBar = () => {
    if (window.scrollY > 80) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div>
      
      <div className={`fixed top-0 z-50 w-full bg-gray-800 pb-2  `}>
        <div className={`flex bg-gray-800 p-3 justify-around items-center shadow-md ${show && 'hidden'}`}>
          <div className='flex space-x-4 text-sm text-white'>

            <span><EmailIcon /> info@esplanade.co.ke</span>
            <span><PhoneIcon /> +(254) 701888222</span>
            <span><FmdGoodIcon /> Suswa Road , Parkland</span>

          </div>
          <div className={`space-x-4  cursor-pointer hidden lg:flex text-white`}>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />

          </div>


        </div>
        <Popover>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between pb-2 sm:h-10  w-full" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/" className='flex items-center justify-center no-underline'>



                    <h4 onClick={() => navigate('/')} className={`px-5 no-underline uppercase font-medium  md:text-3xl text-lg text-center tracking-wider  text-yellow-600`}>Algebris <span>Properties</span></h4>




                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex flex-[0.9] items-center md:ml-10 md:pr-4 md:space-x-12  ">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className={`font-semibold text-medium p-2 rounded-md  uppercase font-sans no-underline  hover:border-b-2 hover:border-white   text-white`}>
                    {item.name}
                  </a>
                ))}



              </div>
              


            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-3 pt-4 flex items-center justify-between">
                  <div className='flex items-center justify-center no-underline'>

                    <h4 onClick={() => navigate('/')} className={`px-3 no-underline uppercase font-medium text-sm text-yellow-600`}>Algebris <span>Properties</span></h4>
                  </div>
                  <div className="pr-5">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-medium font-medium p-2   uppercase font-sans no-underline text-gray-900  hover:border-navy "
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className={`space-x-4  flex items-center justify-center cursor-pointer w-full p-3  `}>
                  <FacebookIcon />
                  <InstagramIcon />
                  <TwitterIcon />

                </div>


              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

      </div>
    </div>
  )
}

export default Header