import React from 'react';
import rocket from "../../images/rocket.png";
import circularMotion from "../../images/Untitled design(4).png";
import Motion from "../../images/Untitled design(5).png";

const Hero = () => {
    return (
        <>
            <div className="w-full max-h-screen lg:min-h-screen relative">
                <div style={{ width: '700px', height: '500px', margin: '0 auto' }} className="hidden lg;inline md:inline absolute bottom-0 right-0 left-0 top-auto blur-3xl rounded-full opacity-20 bg-blue-400">

                </div>
                <img src={rocket} alt="Rocket" className="vector-graphics hidden lg:inline absolute bottom-1 right-0 left-0 " style={{ margin: "0 auto" }} />

                <div className="flex flex-col justify-center items-center gap-6 py-10">
                    <h1 className='text-2xl lg:text-5xl md:text-3xl font-bold text-center'> Good coaching is good teaching </h1>
                    <p className='text-center font-bold opacity-70 px-2 lg:px-0'>In a coaching role, you ask the questions and rely more on your staff, who become the <br /> experts, to provide the information.</p>
                </div>
                <div className='flex justify-between items-center'>
                    <img src={circularMotion} alt="Rocket" className="vector-graphics hidden lg;inline md:inline w-4/12" style={{ margin: "0 auto" }} />
                    <div className='w-96'></div>
                    <div className='w-96'></div>
                    <div className='w-96'></div>
                    <div className='w-96'></div>
                    <div className='w-96'></div>
                    <img src={Motion} alt="Rocket" className=" hidden lg;inline md:inline w-4/12" style={{ margin: "0 auto" }} />
                </div>
            </div>
        </>
    );
};

export default Hero;