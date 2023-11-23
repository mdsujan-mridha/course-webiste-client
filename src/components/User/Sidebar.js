import React, { Fragment, useState } from 'react';
import logo from "../../images/logo/logo.png";
import { Link } from 'react-router-dom';

import { AiOutlineCloseCircle, AiOutlineMenuUnfold } from "react-icons/ai";

const Sidebar = ({ handleSidebarClick }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Fragment>
            <div className={`flex ${isOpen ? 'translate-x-0' : '-translate-x-96 w-0'} transition-transform bg-secondary w-96 px-12 m-5 rounded-md h-auto py-5 gap-4 flex-col`}>
                {
                    isOpen ? (
                        <div className='flex flex-col gap-5 '>
                            <img src={logo} alt="" className='w-72 hover:drop-shadow-2xl transition ease-in-out delay-150' />
                            <h1 className='text-5xl font-bold text-center'> Dashboard </h1>
                            <hr className='w-auto  mt-5' />
                            <Link className='text-start px-12 text-xl font-bold text-gray-400' onClick={() => handleSidebarClick('Account')}> Profile </Link>
                            <Link className='text-start px-12 text-xl font-bold text-gray-400' onClick={() => handleSidebarClick('CourseDetails')}> My class </Link>
                            <Link className='text-start px-12 text-xl font-bold text-gray-400' onClick={() => handleSidebarClick('CoursePdf')}> Pdf Content </Link>
                            <Link className='text-start px-12 text-xl font-bold text-gray-400' > My Order </Link>
                            <Link className='text-start px-12 text-xl font-bold text-gray-400'> My History </Link>
                            <Link className='text-start px-12 text-xl font-bold text-gray-400'> Education </Link>
                        </div>
                    ) : null}
                <div className='absolute top-5 right-1'>
                    {
                        isOpen ? (
                            <button onClick={toggleSidebar} className='w-10 h-10 rounded-full text-4xl font-bold text-white'>
                                <AiOutlineCloseCircle />
                            </button>
                        ) : (<button onClick={toggleSidebar} className=''> <AiOutlineMenuUnfold /> </button>)
                    }
                </div>
            </div>
            {isOpen ? null : (
                <div className='top-10 right-auto left-0 w-auto h-0'>
                    <button onClick={toggleSidebar} className='mt-10 w-12 h-12 rounded-full bg-secondary text-white font-bold text-4xl flex justify-center items-center'>
                        <AiOutlineMenuUnfold />
                    </button>
                </div>
            )}
        </Fragment>
    );
};

export default Sidebar;