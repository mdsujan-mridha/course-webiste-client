
import React from 'react';
import courseImg from "../../images/Complete-Physics-advance-course.png";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Course = () => {

    const courseData = [
        {
            _id: 1,
            chapter: "Vector (ভেক্টর)",
            topics: ["Introduction to Vector", "Components of vector", "Scalar and Vector Quantities", "Operations on Vectors", "Unit Vector", "Dot Product", "Cross Product"]
        },
        {
            _id: 2,
            chapter: "Kinematics (গতিবিজ্ঞান)",
            topics: ["Introduction to Kinematics", "Motion in One Dimension", "Motion in Two Dimensions", "Projectile Motion"],
        },

        {
            _id: 3,
            chapter: "Newtonian Mechanics (নিউটনিয়ান বলবিদ্যা)",
            topics: ["Introduction to Newtonian Mechanics", "Newton's Laws of Motion", "Momentum and Impulse", "Work and Energy", "Circular Motion", "Gravitation"]
        },
        {

            _id: 4,
            chapter: "Thermodynamics (তাপগতিবিদ্যা)",
            topics: ["Introduction to Thermodynamics", "Laws of Thermodynamics", "Thermal Expansion", "Kinetic Theory of Gases", "Ideal Gas Laws", "Heat Transfer"]
        }

    ]

    return (
        <div className=' min-h-screen px-12'>
            <div className='mx-auto flex justify-center py-10'>
                <img src={courseImg} alt="Course_Image" className=' rounded-md' />
            </div>
            <div>
                <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text py-5">A Complete Physics advance course with Sujan Mridha</h1>
            </div>
            <div>
                <p className='text-lg font-bold py-5 text-justify'>
                    Did you know the World Wide Web was developed from information-sharing developments in a particle physics lab?
                    Physics is at the centre of our universe. Everything from the smallest atom to the most complex state in the universe can be explained through the study of physics. Physics discoveries play an important role in technological advancements in healthcare, economics, engineering and more.
                    Study physics to solve real world global problems that have a large impact on our society or simply to gain insight into some of physics’ most enduring questions: how did the universe begin? Are there alternative dimensions?
                    FutureLearn’s online physics courses are designed for everyone; from physics students and professionals to people who are curious about the world.
                </p>
            </div>
            <div className="flex justify-between gap-5 pb-10 flex-col lg:flex-row">
                <div className='w-full lg:w-8/12'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text py-5'> Course content </h1>
                    <div className='w-full lg:w-7/12'>
                        {
                            courseData &&
                            courseData?.map((item) => (
                                <Accordion style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                                    <AccordionSummary
                                        expandIcon={<ArrowDownwardIcon style={{ color: 'white', marginLeft: "10px" }} />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        key={item._id}
                                    >
                                        <Typography variant='h5' color="white"> {item.chapter} </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                        {
                                            item?.topics?.map((topic, index) => (
                                                <Typography variant='p' color="white" key={index} style={{ fontWeight: 600, borderBottom: '1px solid #fff', paddingTop: '15px', paddingBottom: '15px' }}>
                                                    {topic}
                                                </Typography>
                                            ))
                                        }
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        }
                    </div>
                </div>
                <div className='w-full lg:w-4/12 shadow-2xl px-5 pb-10'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text py-5'>  Requirements </h1>
                    <div className='flex flex-col gap-3'>
                        <p className='text-cl font-semibold flex  items-center gap-5'> <TaskAltIcon style={{ color: 'cyan' }} /> Course Objectives and Learning Outcomes </p>
                        <p className='text-cl font-semibold flex  items-center gap-5'><TaskAltIcon style={{ color: 'cyan' }} /> Curriculum Structure </p>
                        <p className='text-cl font-semibold flex  items-center gap-5'><TaskAltIcon style={{ color: 'cyan' }} /> Problem-Solving Practice </p>
                        <p className='text-cl font-semibold flex  items-center gap-5'> <TaskAltIcon style={{ color: 'cyan' }} />Assessment Methods </p>
                    </div>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text py-5'>
                        Material  </h1>

                    <div className='flex flex-col gap-3'>
                        <p className='text-cl font-semibold flex  items-center gap-5'> <TaskAltIcon style={{ color: 'cyan' }} /> Pdf Lecture Sheet </p>
                        <p className='text-cl font-semibold flex  items-center gap-5'><TaskAltIcon style={{ color: 'cyan' }} /> Print Lecture sheet </p>
                        <p className='text-cl font-semibold flex  items-center gap-5'><TaskAltIcon style={{ color: 'cyan' }} /> Live class(zoom & Google Meet) </p>
                        <p className='text-cl font-semibold flex  items-center gap-5'> <TaskAltIcon style={{ color: 'cyan' }} /> Recorded Class  </p>
                    </div>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text py-5 text-center'>
                        Instructor  </h1>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-center text-5xl font-bold'> MD SUJAN </h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Course;