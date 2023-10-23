import React from 'react';
import webImg1 from '../Images/web-1.png'
import webImg2 from '../Images/web-2.png'
import webImg3 from '../Images/web-3.png'
import webImg4 from '../Images/web-4.png'
import webImg5 from '../Images/web-5.png'
import webImg6 from '../Images/web-6.png'

const Blog = () => {
    return (
<>
    <div className='w-full h-[75vh] bg-[url(https://img.freepik.com/premium-vector/valentines-day-colorful-hearts-card-header_1035-16212.jpg)]' >
        <div className=' '>
            <div className='grid md:grid-cols-2 gap-5 justify-between p-10 md:p-20'>
                <div className=''>
                    <iframe className='w-full h-full md:h-[300px]' src="https://www.youtube.com/embed/HGSR3FDVkkQ?si=-KqSok4iVyTV2ZJi" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className=''>
                    <iframe className='w-full h-full md:h-[300px]'  src="https://www.youtube.com/embed/Ojiv9Smi4XE?si=l1HyYJOMuGYDzHyS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

            </div>
        </div>
    </div>




    {/* website img start */}

        <h1 className='text-center mt-5 text-gray-500 text-4xl'>Make My Website</h1>
        <div className='grid md:grid-cols-3 gap-0 md:gap-20 justify-between p-3 md:p-20'>
            <div>
                <div className='relative overflow-scroll h-[350px]'>
                    <img className='absolute' src={webImg1} alt="" />
                </div>
                <a href="#" className='text-green-700 hover:underline font-semibold '>View Website Live Link:</a>
            </div>

            <div>
                <div className='relative overflow-scroll h-[350px]'>
                    <img src={webImg2} alt="" />
                </div>
                <a href="#" className='text-green-700 hover:underline font-semibold '>View Website Live Link:</a>
            </div>

            <div>
                <div className='relative overflow-scroll h-[350px]'>
                    <img src={webImg3} alt="" />
                </div>
                <a href="https://www.metroopinion.com/bd?pbid=MTQxNjptZXRybw==&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBdz-b2IxPt364XM2XvrTznypGOg175nizTYWZKYvH4vKxoaEHGk8AhoCJCMQAvD_BwE"  target='-blank'  className='text-green-700 hover:underline font-semibold '>View Website Live Link:</a>
            </div>

            <div>
                <div className='relative overflow-scroll h-[350px]'>
                    <img src={webImg4} alt="" />
                </div>
                <a href="#" target='-blank' className='text-green-700 hover:underline font-semibold '>View Website Live Link:</a>
            </div>

            <div>
                <div className='relative overflow-scroll h-[350px]'>
                    <img src={webImg5} alt="" />
                </div>
                <a href="https://naim473596.github.io/BestProtfolio-22July2023/" target='-blank' className='text-green-700 hover:underline font-semibold '>View Website Live Link:</a>
            </div>

            <div>
                <div className='relative overflow-scroll h-[350px]'>
                    <img src={webImg6} alt="" />
                </div>
                <a href="https://naim473596.github.io/popularIT.biz/" target='-blank' className='text-green-700 hover:underline font-semibold '>View Website Live Link:</a>
            </div>

        </div>



    {/* website img end */}
</>
    );
};

export default Blog;