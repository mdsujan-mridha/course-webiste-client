import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItem = [
    { id: 1, link: <Link to="home"> Home </Link> },
    { id: 2, link: <Link to="/course"> course </Link> },
    { id: 3, link: <Link to="home"> Blog </Link> },
    { id: 4, link: <Link to="/about"> About </Link> },
    { id: 5, link: <Link to="/courseOutline"> Course Outline </Link> },
  ];

  return (
    <>
      <div className="navbar px-0 lg:px-12" style={{ zIndex: 1100 }}> {/* Adjust z-index here */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-96 text-lg z-50"
            >
              {menuItem?.map((item) => (
                <li key={item?.id} className="text-lg">
                  {item?.link}
                </li>
              ))}
            </ul>
          </div>
          <Link className="lg:visible md:visible btn btn-ghost normal-case text-2xl">
            Science Pathshala
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItem?.map((item) => (
              <li key={item?.id} className="text-xl hover:text-secondary">
                {item?.link}
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end px-2">
          <Link
            to="login"
            className=" text-white w-40 lg:w-48 bg-transparent border-2 h-12 flex justify-center items-center text-center text-xl"
            style={{
              borderTopLeftRadius: '25px',
              borderBottomRightRadius: '25px',
            }}
          >
            Login
          </Link>
        </div>
      </div>
      <div
        className="w-full lg:w-11/12 mx-12 border-b-2 border-dashed h-6"
        style={{ margin: '0 auto' }}
      ></div>
    </>
  );
};

export default Navbar;
