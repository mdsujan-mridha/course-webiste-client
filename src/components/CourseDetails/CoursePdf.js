
import React, { useState } from 'react';
import { BsArrowUpCircleFill, BsFillArrowDownCircleFill } from "react-icons/bs";

const modules = [
    {
        id: 1,
        title: 'Vector(ভেক্টর)',
        imageUrl: 'https://img.freepik.com/free-psd/ee-learning-concept-banner-template_23-2148688189.jpg?w=1060&t=st=1698649519~exp=1698650119~hmac=83f55157be33c77ccb26fdaffdf758723c6c53dd5c97e6776a1b134d287a5e73',
        lectures: [
            { id: 1, title: 'Lecture 1', pdfUrl: 'https://drive.google.com/file/d/13KxvL418iw785Hs-XpjjJlUxDUpGRbO2/preview' },
            { id: 2, title: 'Lecture 2', pdfUrl: 'https://drive.google.com/file/d/1V9r6ymFcn7VG0YhnOXO56Z3dHFM0xsVl/preview' },
            { id: 3, title: 'Lecture 3', pdfUrl: 'https://drive.google.com/file/d/1tWzHl0TAvMXRs4Iyi4PvITaNlzdVFp8C/preview' },
        ],
    },
    {
        id: 2,
        title: 'Module 2',
        imageUrl: 'https://img.freepik.com/free-psd/e-learning-concept-banner-template_23-2148688187.jpg?w=1060&t=st=1698653973~exp=1698654573~hmac=6833584a976c9cb503b0cd8447704277c9b56949e49dbcf59e99709d1b640127',
        lectures: [
            { id: 1, title: 'Lecture 1', pdfUrl: 'https://drive.google.com/file/d/1WzIAPtfYlheBZu53GMbzR28RWlnqLvjT/preview' },
            { id: 2, title: 'Lecture 2', pdfUrl: 'https://drive.google.com/file/d/1sKNYzbrojpK_ZzOfuQSRK6MEG1qGUzBf/preview/preview' },
            { id: 3, title: 'Lecture 3', pdfUrl: 'https://drive.google.com/file/d/1tWzHl0TAvMXRs4Iyi4PvITaNlzdVFp8C/preview' },
        ],
    },
]

const Accordion = ({ title, content, isOpen, onClick }) => {
    return (
        <div>
            <div
                className="flex items-center justify-between p-3 cursor-pointer bg-primary text-2xl font-bold"
                onClick={onClick}
            >
                <span>{title}</span>
                <span>{isOpen ? <BsArrowUpCircleFill /> : <BsFillArrowDownCircleFill />}</span>
            </div>
            {isOpen && <div className="p-3">{content}</div>}
        </div>
    )
}
// lecture content 
const Lecture = ({ lecture, handleLectureClick, isCurrent, }) => {
    const handlePlay = () => {
        handleLectureClick(lecture);
    }
    return (
        <div>
            <h3 onClick={handlePlay} className='text-xl font-bold' style={{ cursor: 'pointer', color: isCurrent ? 'white' : 'gray' }}>
                {lecture.title}
            </h3>

        </div>
    )

}

const CoursePdf = () => {
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
        <div className="w-full h-screen bg-primary text-white">
            <div className="flex flex-row-reverse justify-around gap-5 py-10 px-12">
                <div className="w-1/5 bg-secondary rounded-lg">
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
                            <iframe src={selectedLecture.pdfUrl} width="100%" height="700" title='pdf'></iframe>
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

export default CoursePdf;

