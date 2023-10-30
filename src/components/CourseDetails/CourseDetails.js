import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { BsArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";

const modules = [
    {
        id: 1,
        title: 'Vector(ভেক্টর)',
        imageUrl: 'https://img.freepik.com/free-psd/ee-learning-concept-banner-template_23-2148688189.jpg?w=1060&t=st=1698649519~exp=1698650119~hmac=83f55157be33c77ccb26fdaffdf758723c6c53dd5c97e6776a1b134d287a5e73',
        lectures: [
            { id: 1, title: 'Lecture 1', videoUrl: 'https://www.youtube.com/watch?v=zGrYZWmXTfc' },
            { id: 2, title: 'Lecture 2', videoUrl: 'https://www.youtube.com/watch?v=em2JsqAK1O4' },
            { id: 3, title: 'Lecture 3', videoUrl: 'https://www.youtube.com/watch?v=x0pD30_SuHo' },
        ],
    },
    {
        id: 2,
        title: 'Module 2',
        imageUrl: 'https://img.freepik.com/free-psd/e-learning-concept-banner-template_23-2148688187.jpg?w=1060&t=st=1698653973~exp=1698654573~hmac=6833584a976c9cb503b0cd8447704277c9b56949e49dbcf59e99709d1b640127',
        lectures: [
            { id: 4, title: 'Lecture 4', videoUrl: 'https://www.youtube.com/watch?v=7NcHQIvu1gM' },
            { id: 5, title: 'Lecture 5', videoUrl: 'https://www.youtube.com/watch?v=GNAA09Ps-zk' },
        ],
    },
];
const Accordion = ({ title, content, isOpen, onClick }) => {
    return (
        <div>
            <div
                className="flex items-center justify-between p-3 cursor-pointer bg-cyan-900 text-2xl font-bold"
                onClick={onClick}
            >
                <span>{title}</span>
                <span>{isOpen ? <BsArrowUpCircleFill /> : <BsFillArrowDownCircleFill />}</span>
            </div>
            {isOpen && <div className="p-3">{content}</div>}
        </div>
    );
};
// Lecture component
const Lecture = ({ lecture, handleLectureClick, isCurrent, }) => {
    const handlePlay = () => {
        handleLectureClick(lecture);
    };

    return (
        <div>
            <h3 onClick={handlePlay} className='text-xl font-bold' style={{ cursor: 'pointer', color: isCurrent ? 'white' : 'gray' }}>
                {lecture.title}
            </h3>
        </div>
    );
};

const CourseDetails = () => {
    const [selectedModule, setSelectedModule] = useState(modules[0]);
    const [selectedLecture, setSelectedLecture] = useState(null);


    const handleModuleClick = (module) => {
        if (selectedModule === module) {
            setSelectedModule(module);
        } else {
            setSelectedModule(module);
            setSelectedLecture(null);
        }
    };

    const handleLectureClick = (lecture) => {
        setSelectedLecture(lecture);
    };



    return (
        <div className="w-full h-screen bg-cyan-950 text-white">
            <div className="flex flex-row-reverse justify-around gap-5 py-10 px-12">
                <div className="w-1/5 bg-cyan-900 rounded-lg">
                    <h1 className="text-3xl font-bold mb-4 text-center pt-5">Course Content</h1>
                    <div className="flex flex-col px-5 pt-5">
                        {modules.map((module) => (
                            <Accordion
                                key={module.id}
                                title={module.title}
                                content={
                                    <div>
                                        {module.lectures.map((lecture) => (
                                            <Lecture
                                                key={lecture.id}
                                                lecture={lecture}
                                                handleLectureClick={handleLectureClick}
                                                isCurrent={selectedLecture && selectedLecture.id === lecture.id}

                                            />
                                        ))}
                                    </div>
                                }
                                isOpen={selectedModule && selectedModule.id === module.id}
                                onClick={() => handleModuleClick(module)}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-3/4">
                    {selectedLecture ? (
                        <div key={selectedLecture.id}>

                            <ReactPlayer url={selectedLecture.videoUrl}

                                width="100%"
                                height="80vh"
                                controls={true}
                                playing={true}
                                muted={false}
                                playbackRate={1.0}
                                progressInterval={100}
                                playIcon
                                previewTabIndex={0}

                            />
                        </div>
                    ) : (
                        <div>
                            {selectedModule && (
                                <img
                                    src={selectedModule.imageUrl}
                                    alt={selectedModule.title}
                                    className="w-full"
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default CourseDetails;