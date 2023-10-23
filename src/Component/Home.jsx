import React from 'react';
import HeroImg from "../Images/HeroImg2.webp"
// import HomeBG from "./Images/HomeBG.jpeg"
import Button from './Button';
import Service from './Service';
import Contact from './Contact';
import Blog from './Blog';
import About from './About';


const Home = () => {

    return (
        <div>
        <div className='w-full bg-[url(./Images/HomeBG.jpg)] bg-no-repeat bg-cover max-h-screen'>
            <div className='md:flex'>
                <div className='w-full md:w-1/2'>
                    <div className='text-white p-6 md:p-20'>
                        <h1 className='text-xl md:text-6xl font-bold p-2 italic'>HI <span className='text-red-300'>THERE</span>,</h1>
                        <h1 className='text-xl md:text-5xl font-bold p-2 hover:text-red-400 italic '>I AM NAIM RANA</h1>
                        <h1 className='pl-2 text-md '>I AM WEB DEVELOPER WITH (REACT.JS)</h1>


                {/* Buuton start */}
                <div className='md:flex m-6 ml-0  gap-2'>            
                    <button data-modal-target="staticModal" data-modal-toggle="staticModal" className="block text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mb-3 md:m-0 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                       More Info
                    </button>

                    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative w-full max-w-2xl max-h-full">

                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        About me
                                    </h3>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>

                                <div className="p-6 space-y-6">
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        My Name is Naim Rana . I have done diploma in Computer Science & Techonology from Kishoregonj Polytechnic Institute. I special in Web Design & Development. Completed Computer Office Application from Youth Development. I like to know Computer Details. I always believe in Allah.
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        I live in Jamalpur. A Districf of Mymensingh Division. Shrine of Hazrat Shajamal is Located in Jamalpur. The old of Jamalpur is Sinhajani.
                                    </p>
                                </div>

                                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button>Download CV</Button>
                </div>
                {/* button end */}

            </div>
        </div>


                <div className='w-full md:w-1/2'>
                        <img src={HeroImg} alt="" />
                </div>
    </div>
  </div>


        {/* Service section  */}
        <Service/>

        {/* About section */}
        <About/>

        {/* Contact Section */}
        {/* <Contact/> */}

        {/* Blog section */}
        {/* <Blog/> */}

        </div>
    );
};

export default Home;