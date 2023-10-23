import React from 'react';

const NotFound = () => {
    return (
        <div className='w-full h-[75vh] bg-gray-200 p-2 md:px-20 md:py-10'>
        <div className='p-5  md:p-16 bg-gray-100 rounded-lg text-center'>
            <h1 className='text-3xl mb-3'>404</h1>
            <p className='text-sm text-gray-500'>This page doesn't seem to exist.</p>
            <br />
            <p className='text-sm text-red-500'>Copy Right not Allow!</p>
            <br />
        </div>
    </div>
    );
};

export default NotFound;