import React from 'react';
import physics from "../../images/physics.png"
import { Link } from 'react-router-dom';
const Join = () => {
    return (
        <>
            <div className="w-full h-auto py-6 bg-transparent px-24 flex justify-between items-center relative">
            <div className='w-96 h-56  blur-3xl  absolute top-auto  left-0 right-auto bottom-16 opacity-20 skew-y-12 bg-orange-600' style={{ zIndex: 10 }}></div>
                <div className='pl-20 w-1/2 flex flex-col'>
                    <h4 className='text-lg font-bold' style={{ color: '#A99CFF' }}> Join Dominie At Best </h4>
                    <h2 className='text-white font-bold text-4xl pt-10'> The number one factor in  relevance <br /> drives out resistance. </h2>
                    <p className='text-justify font-semibold text-md text-gray-400 py-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Link className=" text-white w-48 bg-transparent border-2 h-12 flex justify-center items-center text-center text-xl my-7" style={{ borderTopLeftRadius: '25px', borderBottomRightRadius: '25px' }}>Learn more..</Link>
                </div>
                <div className='w-1/3'> <img src={physics} alt="Physics" className='w-full vector-graphics' /> </div>
            </div>
        </>
    );
};

export default Join;