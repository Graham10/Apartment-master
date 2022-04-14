import React from 'react'
import banner from '../images/banner2.jpeg'
import banner1 from '../images/logo2.jpeg'
import Banner from '../components/Banner'
import Gallary from '../components/Gallary'

function Service() {
  return (
    <div>
      <Banner imageUrl={banner1} title="esplanade" description='The insights of what we offer to our customers' />
      <div>

        <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
          <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl font-semibold uppercase font-serif italic  text-navy tracking-wider text-center  ">Our Offers</h2>
              
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-coolGray-50">Services</h3>
                <p className="mt-3 text-lg dark:text-coolGray-400">An all inclusive breakfast buffet</p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">Service</h4>
                      <p className="mt-2 dark:text-coolGray-400">House cleaning</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">Service</h4>
                      <p className="mt-2 dark:text-coolGray-400">Valet parking and car washing available</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">Service</h4>
                      <p className="mt-2 dark:text-coolGray-400">Free wifi connectivity</p>
                    </div>
                  </div>


                </div>
              </div>
              <div aria-hidden="true" className="mt-10 lg:mt-0">
                <img src={banner} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-coolGray-500" />
              </div>
            </div>
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-coolGray-50">Service</h3>
                  <p className="mt-3 text-lg dark:text-coolGray-400">professional security guards</p>
                  <div className="mt-12 space-y-12">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">Services</h4>
                        <p className="mt-2 dark:text-coolGray-400">Insurance cover on personal property.</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-coolGray-900">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">Services</h4>
                        <p className="mt-2 dark:text-coolGray-400">Water and electricity services.</p>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <img src={banner1} alt="" className="mx-auto rounded-lg shadow-lg dark:bg-coolGray-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
       
      </div>
    </div>
  )
}

export default Service