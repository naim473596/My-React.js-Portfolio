import React from 'react';
import Cardimg1 from '../Images/CardImg-1.png'
import Cardimg2 from '../Images/CardImg-2.webp'
import Cardimg3 from '../Images/CardImg-3.png'
import Cardimg4 from '../Images/CardImg-4.jpeg'
import Cardimg5 from '../Images/CardImg-5.jpeg'
import Cardimg6 from '../Images/CardImg-6.jpeg'
import Button from './Button';

const Service = () => {
    const CardObj = {
        CardImg:{
            CardImg1:Cardimg1,
            CardImg2:Cardimg2,
            CardImg3:Cardimg3,
            CardImg4:Cardimg4,
            CardImg5:Cardimg5,
            CardImg6:Cardimg6,
        },
        cardHeading:{
            cardHeading1: "Web Design",
            cardHeading2: "Web Development",
            cardHeading3: "Framwork & Library",
            cardHeading4: "Microsoft Office Application",
            cardHeading5: "Adove Photoshops",
            cardHeading6: "Data Entry",
        },
        cardParag:{
            cardParag1: "Proffesional web designer and responsive website manipulation make HTML,CSS,JS.",
            cardParag2: "Creative Web Development function manipulate and any Creaticul options.",
            cardParag3: "Bootstrap,Tailwind & React.js Framwork and Library knowloge",
            cardParag4: "Computer Office Application Expert Ms Word, Ms Excel, Power Point etc.",
            cardParag5: "Photo editing, visiting card Design Graphic design etc.",
            cardParag6: "Data entry lead Genaration, Office Data entry, Factory data managment and Everything data manypulation.",
        },
    }
    
  return (
    <>
        <h1 className='bg-indigo-400 pl-5 mt-3 rounded-sm px-1 md:px-20 text-xl md:text-3xl font-semibold text-white py-1'><marquee behavior="" direction=""><pre>My Service Section                       My Service Section                      My Service Section</pre></marquee></h1>
        <div className='px-5 md:px-20 sm:grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 gap-1 my-3 '>

            <div className=" m-0 md:m-6  mb-3 md:mb-0  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800             dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full h-[220px] border" src={CardObj.CardImg.CardImg1} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {CardObj.cardHeading.cardHeading1}
                    </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {CardObj.cardParag.cardParag1}
                    </p>
                    
                 {/* Buuton start */}
                <div className='md:flex m-6 ml-0  gap-2'>            
                    <button data-modal-target="staticModal" data-modal-toggle="staticModal" className="block text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mb-3 md:m-0 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                       Read More
                    </button>

                    <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative w-full max-w-2xl max-h-full">

                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Web Design
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
                                    Web design involves creating the visual layout and aesthetics of a website, focusing on user experience, graphics, and overall look. Front-end development, on the other hand, involves implementing the design into a functional website using coding languages like HTML, CSS, and JavaScript.
                                    </p>
                                </div>

                                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button data-modal-hide="staticModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* button end */}
    
                </div>
            </div>

            <div className="m-0 md:m-6 mb-3 md:mb-0  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800             dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full h-[220px]" src={CardObj.CardImg.CardImg2} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {CardObj.cardHeading.cardHeading2}
                    </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {CardObj.cardParag.cardParag2}
                    </p>
                    <Button>Read More</Button>
    
                </div>
            </div>

            <div className="m-0 md:m-6 mb-3 md:mb-0  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800             dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full h-[220px] " src={CardObj.CardImg.CardImg3} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {CardObj.cardHeading.cardHeading3}
                    </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {CardObj.cardParag.cardParag3}
                    </p>
                    <Button>Read More</Button>
    
                </div>
            </div>

            <div className="m-0 md:m-6 mb-3 md:mb-0  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800             dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full h-[220px] " src={CardObj.CardImg.CardImg4} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {CardObj.cardHeading.cardHeading4}
                    </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {CardObj.cardParag.cardParag4}
                    </p>
                    <Button>Read More</Button>
    
                </div>
            </div>

            <div className="m-0 md:m-6 mb-3 md:mb-0  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800             dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full h-[220px] " src={CardObj.CardImg.CardImg5} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {CardObj.cardHeading.cardHeading5}
                    </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {CardObj.cardParag.cardParag5}
                    </p>
                    <Button>Read More</Button>
    
                </div>
            </div>

            <div className="m-0 md:m-6 mb-3 md:mb-0  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800             dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full h-[220px] border" src={CardObj.CardImg.CardImg6} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {CardObj.cardHeading.cardHeading6}
                    </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {CardObj.cardParag.cardParag6}
                    </p>
                    <Button>Read More</Button>
    
                </div>
            </div>

        </div>
    </>
        );
    };

export default Service;
