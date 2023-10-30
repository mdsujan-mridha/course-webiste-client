import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Fragment>
            <Link to="/courseDetails">
                <div className="w-96 h-80 bg-cyan-400" style={{ margin: "0 auto" }}>
                    <img src="https://img.freepik.com/free-psd/ee-learning-concept-banner-template_23-2148688189.jpg?w=1380&t=st=1698649519~exp=1698650119~hmac=83f55157be33c77ccb26fdaffdf758723c6c53dd5c97e6776a1b134d287a5e73" alt="Course Banner" />
                    <h1 className='text-white font-bold text-2xl py-4 text-center'> Web development </h1>
                    <p> Creator: Md.Sujan </p>
                </div>
            </Link>
        </Fragment>
    );
};

export default Home;