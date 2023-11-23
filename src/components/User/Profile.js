import React, { Fragment, useState } from 'react';
import Sidebar from './Sidebar';
import CourseDetails from '../CourseDetails/CourseDetails';
import CoursePdf from "../CourseDetails/CoursePdf";
import Account from './Account';
const Profile = () => {
    const [activeComponent, setActiveComponent] = useState('Account');
    const handleSidebarClick = (componentName) => {
        setActiveComponent(componentName);
    };




    return (
        <Fragment>
            <div className="flex w-full">
                <Sidebar handleSidebarClick={handleSidebarClick} />
                <div className='flex-grow w-full'>
                    {activeComponent === 'Account' && <Account />}
                    {activeComponent === 'CourseDetails' && <CourseDetails />}
                    {activeComponent === 'CoursePdf' && <CoursePdf />}
                </div>
            </div>
        </Fragment>
    );
};

export default Profile;