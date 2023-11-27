import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Account from './Account';
import CourseDetails from '../CourseDetails/CourseDetails';
import CoursePdf from '../CourseDetails/CoursePdf';
import { MdOutlineMenu } from 'react-icons/md';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const Profile = () => {
  const [activeComponent, setActiveComponent] = useState('CoursePdf');
  const [mobileOpen, setMobileOpen] = useState(true); // Set drawer to initially open

  const handleSidebarClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List className="bg-secondary h-screen text-white">
      {['Account', 'CourseDetails', 'CoursePdf'].map((text) => (
        <ListItemButton key={text} onClick={() => handleSidebarClick(text)}>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </List>
  );

  return (
    <div className="flex w-full flex-col lg:flex-row relative bg-primary h-screen mt-28 lg:mt-0">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': { width: 240, zIndex: 1000 }, // Adjust the z-index
        }}
        className=" bg-transparent"
      >
        {drawer}
      </Drawer>

      <div className="flex-grow w-full absolute top-0 bottom-0 z-50 lg:ml-240 bg-primary" style={{ zIndex: 100 }}> {/* Adjust z-index here too */}
        <div className="absolute top-3 left-3 lg:px-12">
          <p
            className="flex lg:justify-center lg:items-center gap-2 cursor-pointer"
            onClick={handleDrawerToggle}
          >
            Dashboard{' '}
            <MdOutlineMenu
              fontSize="large"
              style={{ display: mobileOpen ? 'none' : 'block', cursor: 'pointer' }}
            />{' '}
          </p>
          <IoMdCloseCircleOutline
            onClick={handleDrawerToggle}
            fontSize="large"
            style={{ display: mobileOpen ? 'block' : 'none', cursor: 'pointer' }}
          />
        </div>
        {activeComponent === 'Account' && <Account />}
        {activeComponent === 'CourseDetails' && <CourseDetails />}
        {activeComponent === 'CoursePdf' && <CoursePdf />}
      </div>
    </div>
  );
};

export default Profile;
