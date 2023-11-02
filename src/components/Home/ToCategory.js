import React from 'react';
import couseImg from "../../images/course/3.png";
import { BsCameraVideo } from "react-icons/bs";
import { MdOutlineQuiz } from "react-icons/md";
import { PiExamLight } from "react-icons/pi";

const ToCategory = () => {
    return (
        <>
            <div className='my-24 relative'>
                <div className='w-96 h-56 bg-cyan-500 blur-3xl  absolute top-auto right-0 left-auto bottom-[-50px] opacity-20 skew-y-12' style={{ zIndex: 10 }}></div>
                <div className="flex gap-24 bg-secondary w-10/12 h-auto rounded-xl hover:shadow-2xl px-12" style={{ margin: '0 auto' }}>
                    <div className='flex items-center justify-center py-5'>
                        <img src={couseImg} alt="" className='rounded-xl' />
                    </div>
                    <div className='pt-5 relative'>
                        <h1 className='text-5xl font-bold'> Complete Physics Advance course with Sujan Mridha </h1>
                        <div className='bottom-5 absolute flex items-center gap-5'>
                            <div className='flex bg-white w-64 h-16 rounded-full  justify-around items-center px-5'>
                                <div className='w-14 h-14 bg-red-500 rounded-full flex justify-center items-center font-bold text-3xl'><BsCameraVideo /></div>
                                <p className='text-black text-lg font-bold'> 80+ Videos </p>
                            </div>
                            <div className='flex bg-white w-64 h-16 rounded-full  justify-around items-center px-5'>
                                <div className='w-14 h-14 bg-blue-500 rounded-full flex justify-center items-center font-bold text-3xl'><MdOutlineQuiz /></div>
                                <p className='text-black text-lg font-bold'> 700+ Quiz </p>
                            </div>
                            <div className='flex bg-white w-64 h-16 rounded-full  justify-around items-center px-5'>
                                <div className='w-14 h-14 bg-cyan-500 rounded-full flex justify-center items-center font-bold text-3xl'><PiExamLight /></div>
                                <p className='text-black text-lg font-bold'> 100+ Exam </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ToCategory;