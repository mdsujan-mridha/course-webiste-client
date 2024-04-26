
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
            topics: ["দুটি ভেক্টরের লব্ধি নির্নয়", "আপেক্ষিক বেগ", "ভেক্টরের উপাংশ সংক্রন্ত", "দুইয়ের অধিক ভেক্টরের লব্ধি নির্ণয়", "নদী ও স্রোত সংক্রান্ত সমস্যা", "ভেক্টরের ডট", "ভেক্টরের ক্রস গুণন", "ভেক্টর অন্তরীকরণ", "আংশিক অন্তরীকরণ", "গ্রেডিয়েন্ট,ডাইভারজেন্স ও কার্ল"]
        },
        {
            _id: 2,
            chapter: "Newtonian Mechanics (নিউটনিয়ান বলবিদ্যা)",
            topics: ["নিউটনের সূত্র সংকান্ত", "বলের ঘাত ও ঘাত বল সংক্রন্ত", "ভরবেগের সংরক্ষন সূত্র সংক্রান্ত", "রকেটের গতি সংক্রন্ত", "ঘর্ষন সংক্রান্ত", "বেগ ও গতিশক্তি সংক্রান্ত", "তিনটা বলের সাম্যাবস্থা সংক্রান্ত", "লিফট সংক্রান্ত", "জড়তার ভ্রামক নির্নয় সংক্রান্ত", "দ্বন্দ্ব ও টর্ক নির্ণয় সংক্রান্ত", "কৌনিক ভরবেগ সংক্রান্ত", "কৌনিক গতিশক্তি নির্নয়", "কেন্দ্রমুখী ত্বরন িএবং বল সংক্রান্ত", "রাস্তার ব্যাংকিং নির্নয় সংক্রান্ত", "চক্রগতির ব্যাসার্ধ সংক্রান্ত", "যুক্ত বস্তুর ত্বরন"],
        },

        {
            _id: 3,
            chapter: "Work,Power & Energy (কাজ, শক্তি ও শক্তি)",
            topics: ["কৃতকাজ নির্নয় সংক্রান্ত", "সরল দোলক সংক্রন্ত", "হাতুড়ি-পেরেক সংক্রান্ত সমস্যা", "স্প্রিং বল(পরিবর্তনশীল বল) দ্বারা কৃত কাজ", "মহাকর্ষ বল দ্বার কৃত কাজ", "বিভব শক্তি ্র ও গতি গতি সংক্রান্ত", "কাজ-শক্তি উপপাদ্য সংক্রন্ত", "ক্ষমতা সংক্রান্ত"]
        },
        {

            _id: 4,
            chapter: "Gravity and Gravitation (মহাকর্ষ ও অভিকর্ষ)",
            topics: ["মহাকর্ষ বলের সূত্রে ব্যবহার", "অভিকর্ষজ ত্বরণের সূত্র সংক্রান্ত", "মহাকর্ষী প্রবাল্য ও বিভব সংক্রান্ত", "কেপলারের সূত্র সংক্রান্ত", "মুক্তিবেগ সংক্রান্ত"]
        },
   
        {

            _id: 6,
            chapter: "Structural Properties of Matter(পদার্থের গাঠনিক ধর্ম)",
            topics: ["পীড়ন ও বিকৃতি সংক্রান্ত সমস্যা", "ইয়াং গুণাঙ্ক ও প্রযুক্ত বল সংক্রান্ত সমস্যা", "কাঠিন্যের গুনাঙ্ক সংক্রান্ত সমস্যা", "আয়তন গুনাঙ্ক সংক্রান্ত", "পয়সেরর অনুপাত সংক্রান্ত", "অসহ পীড়ন সংক্রান্ত সমস্যা", "একাধিক তার সমম্লিত সংক্রান্ত সমস্যা", "কৃত কাজ সংক্রান্ত", "তিন প্রকার গুনাঙ্ক এবং পয়সেরর অনুপাতের মধ্যকার সম্পর্ক সংক্রান্ত সমস্যা", "সংনম্যতা সংক্রান্ত", "পৃষ্ঠটান সংক্রান্ত", "পৃষ্ঠশক্তি সংক্রান্ত", "পৃষ্ঠটানের উপর তাপমাত্রার প্রভাব", "সান্দ্রতা এব স্টোকসের সূত্র সংক্রান্ত", "কৈশিকতা এবং স্পর্শ কোন", "তরল ফোঁটা ও বুদবুদের অভ্যন্তরন্থ চাপ সংক্রান্ত"]
        },
        {

            _id: 7,
            chapter: "Periodic Motion(পর্যায়বৃত্তিক গতি)",
            topics: ["সরল ছন্দিত স্পন্দন সম্পর্কিত", "সরলদোলক সম্পর্কিত", "সরল ছন্দিত কণার শক্তি", "লেখচিত্র সংক্রান্ত", "একাধিক স্প্রিং সংক্রান্ত সমস্যা"]
        },
        {

            _id: 8,
            chapter: "Ideal gas and kinetic theory of gases(আদর্শ গ্যাস এবং গ্যাসের গতিশক্তি )",
            topics: ["বয়েল,চার্লস সূত্র সংক্রান্ত", "শক্তির সমবিভাজন নীতি", "গতি শক্তি সংক্রান্ত + স্বাধীন মাত্র", "বর্গমূল গড় বর্গবেগ সংক্রান্ত", "গড় মুক্ত পথ সংক্রান্ত", "আপেক্ষিক আর্দ্রতা", "গড়বেগ সংক্রান্ত", "পরমশূন্য তাপমাত্র"]
        },
        {

            _id: 9,
            chapter: "Thermodynamics (তাপগতিবিদ্যা)",
            topics: ["ত্রুটিপূর্ণ থার্মোমিটার বিষয় সমস্যা", "পানির ত্রৈধ বিন্দুতে পাঠ ব্যবহার করে তাপমাত্র নির্নয়", "dQ=dU+dW সংক্রান্ত", "গতিশক্তি তাপশক্তিতে রুপান্তর", "স্থিতিশক্তির দ্বারা কাজ ও উৎপন্ন তাপ সংক্রান্ত", "রুদ্ধতাপীয় প্রক্রিয়ায় বিভিন্ন সমীকরণ সংক্রান্ত", "ইজ্ঞিন এর কৃতকাজ,দক্ষতা সংক্রান্ত সমস্যা", "উৎসব ও গ্রাহকের তাপমাত্রা সংক্রান্ত সমস্যা", "রেফ্রিজারেটর সংক্রান্ত সমস্যা", "এন্ট্রপি সংক্রান্ত সমস্যা", "Cp ও Cv এর সমস্যা", "রোধ ব্যবহার করে তাপমাত্র নির্ণয়", "গৃহীত তাপ = বর্জিত তাপ সংক্রান্ত"]
        },
        {

            _id: 10,
            chapter: "Static Electricity (স্থির তড়িৎ)",
            topics: ["চার্জের তলমাত্রিক ঘনত্ব সংক্রান্ত", "কুলম্বের সূত্রের ব্যবহার সংক্রান্ত", "তড়িৎ ক্ষেত্রের প্রাবাল্য সংক্রান্ত", "বিভব সংক্রান্ত", "ধারকত্ব সংক্রান্ত", "সমান্তরাল পাত ধারক", "ধারকের সংযোজন শক্তি", "একাধিক মাধ্যম থাকলে ধারকের ধারকত্ব", "দ্বিপোল ভ্রামক", "গাউসের সূত্র সংক্রান্ত"]
        },
        {

            _id: 11,
            chapter: "Current Electricity (চল তড়িৎ)",
            topics: ["তড়িৎ প্রবাহ ও ইলেক্ট্রনের তাড়নবেগ সম্পর্কিত সমস্যা", "রোধ সম্পর্কিত সমস্যা", "বর্তনীতে ওহমের সূত্র সংক্রান্ত সমস্যা", "বিদ্যুৎ কোষের সমবায় সংক্রান্ত সমস্যা", "কার্শফের সূত্র সংক্রান্ত", "হুইটস্টোন ব্রীজ নীতি সংক্রান্ত সমস্যা", "মিটার ব্রীজ সংক্রান্ত সমস্যা", "পটেনশিওমিটার সংক্রান্ত সমস্যা", "অ্যামিটারের পাল্লা বৃদ্ধি", "ভোল্টামিটারের পাল্লা বৃদ্ধি সংক্রান্ত", "বৈদ্যুতিক শক্তি,ক্ষমতা ও তাপীয় ক্রিয়া", "বিদ্যুৎ বিল সংক্রান্ত", "ভিন্ন মানের তড়িৎকোষযুক্ত থাকলে", "একাধিক ভিন্নমানের তড়িৎকোষযুক্ত থাকলে"]
        },
        {

            _id: 12,
            chapter: "Physical Optics (ভৌত আলোকবিজ্ঞান)",
            topics: ["ব্যতিচার সংক্রান্ত সমস্যা", "অপবর্তন সংক্রান্ত সমস্যা", "সমবর্তন সংক্রান্ত সমস্যা", "পয়েন্টিং ভেক্টর সংক্রান্ত সমস্যা"]
        },
        {

            _id: 13,
            chapter: "Introduction to Modern Physics (আধুনিক পদার্থ বিজ্ঞানের সূচনা)",
            topics: ["দৈর্ঘ্যের আপেক্ষিকতা সংক্রান্ত সমস্যা", "সময়ের আপেক্ষিকতা সংক্রান্ত সমস্যা", "ভর ও শক্তি সংক্রান্ত সমস্যা", "ভর শক্তির রুপান্তর সংক্রান্ত", "স্টোফানের সূত্র সংক্রান্ত", "এক্স রশ্মির নির্গমন সংক্রান্ত", "ভরবেগ সংক্রান্ত", "ইলেক্ট্রনের বেগ সংক্রান্ত", "নিবৃত্তি বিভব সংক্রান্ত", "কার্যাপেক্ষক সংক্রান্ত ", "আইনেস্টাইনের আলোক তড়িৎ সমীকরণ সংক্রান্ত", "ডি ব্রগলীর তরঙ্গ সংক্রান্ত", "কম্পটন ক্রিয়া সংক্রান্ত", "হাইজেনবার্গের অনিশ্চয়তা নীতি সংক্রান্ত", "উৎসের ক্ষমতা সংক্রান্ত", "লরেজ্ঞ রুপান্তর সংক্রান্ত", "বেগ সংযোগের আপেক্ষিক সূত্র সংক্রান্ত"]
        },
        {

            _id: 14,
            chapter: "Atom Model and Nuclear Physics (পরমাণুর মডেল এবং নিউক্লিয়ার পদার্থবিজ্ঞান)",
            topics: ["হাইড্রোজেন পরমাণুর কক্ষপথের ব্যাসার্থ,ইলেক্ট্রনের রৈখিক ও কৌনিক বেগ,কৌনিক ভরবেগ ইত্যাদি নির্নয় সংক্রান্ত", "হাইড্রোজেন কক্ষপথে ইলেক্ট্রনের স্থিতিশক্তি,গতিশক্তি ও মোট শক্তি ইত্যাদি সংক্রান্ত", "ফোটনের কম্পঙ্ক সংক্রান্ত", "হাইড্রোজেন পরমাণু ভূমি হতে উত্তেজিত কক্ষে যাওয়ার জন্য প্রোয়জনীয় শক্তি নির্নয়", "নিউক্লিয়াসের ব্যাসার্থ ও ঘনত্ব নির্ণয় সংক্রান্ত", "তেজেস্ক্রিয় পদার্থের অর্ধায়ু,গড় আয়ু", "তেজেস্ক্রিয় ক্ষয় সূত্র", "তেজেস্ক্রিয় রুপান্তর", "ভরত্রুটি ও বন্ধন শক্তি সংক্রান্ত","নিউক্লিয় ফিশন ও ফিউশন সংক্রান্ত সমস্যা"]
        },
        {

            _id: 15,
            chapter: "Semiconductor and Electronics (সেমিকন্ডাক্টর ও ইলেকট্রনিক্স)",
            topics: ["ট্রানজিস্টর সংক্রান্ত সমস্যা", "ডেসিমাল থেকে বাইনারিতে রুপান্তর", "অক্টল/হেক্সডেসিমাল থেকে বাইনারিতে রুপান্তর", "লজিক গেট সংক্রান্ত", "Diode সহ Circuit সংক্রান্ত", "Ideal Diode সংক্রান্ত সমস্যা", "Transistor কে Aplifier রুপে ব্যবহার সংক্রান্ত", "Transistor এ কিশর্ফ Law এর প্রয়োগ সংক্রান্ত"]
        },


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
                    <div className='w-full lg:w-9/12'>
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
                                                <p className='text-sm md:text-md lg:text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-600 text-transparent bg-clip-text py-5' key={index} style={{ borderBottom: '1px solid #fff', paddingTop: '15px', paddingBottom: '15px' }}>
                                                    {topic}
                                                </p>
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