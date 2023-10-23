import React from 'react';

const Button = (props) => {
    return (
        <div>
            {/* <button className='bg-indigo-600 text-white font-[poppins] py-1  px-5 rounded md:ml-8   hover:bg-indigo-400 duration-500 mb-5 md:mb-0'>
                {props.children}
            </button> */}



        <button  className="block text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-700" type="button">
        {props.children}
        </button>


        </div>
    );
};

export default Button;