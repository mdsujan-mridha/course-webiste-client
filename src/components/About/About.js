

import React from 'react';

const About = () => {
    return (
        <div className=' min-h-screen'>
            <h1 className='text-md md:text-xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text py-10 px-12 text-center leading-loose'> Welcome to Science Pathshala, where we ignite the spark of curiosity and nurture the flames of knowledge. </h1>

            <div>
                <img src="https://i.ibb.co/sJyVG62/Science.png" alt="" />
            </div>
            <div>
                <h1 className='text-white font-bold text-xl px-12 pt-16 pb-12'> At Science Pathshala, we are dedicated to empowering students to excel in physics and mathematics at the HSC level. Our coaching center is founded on the principles of quality education, personalized attention, and a passion for learning. </h1>
            </div>
            <div className='px-12 py-12 flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl font-bold text-white'> Our Mission </h1>
                    <p className='py-10'> Our mission at Science Pathshala is to provide high-quality education in physics and mathematics to HSC level students. We aim to cultivate a deep understanding of these subjects, foster critical thinking skills, and prepare students for academic success. </p>
                </div>
                <div className='w-full lg:w-1/2'>
                    <img src="https://i.ibb.co/qN9XMwF/Untitled-design.png" alt="mission" className='w-full' />
                </div>
            </div>

        </div>
    );
};

export default About;