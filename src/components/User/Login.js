import React, { Fragment, useState } from 'react';
import loginImg from "../../images/user/login.png";
import { Link } from 'react-router-dom';
const Login = () => {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log({ loginEmail, loginPassword })
    }

    return (
        <Fragment>
            <div className='w-full h-screen flex lg:justify-center lg:items-center'>
                <div className="w-full lg:w-1/2 h-auto py-5 bg-secondary rounded-md">
                    <h1
                        className="text-center py-5 text-6xl font-bold border-b-gray-200 border-b-2 border-dashed px-12 text-transparent"
                        style={{
                            backgroundImage: "linear-gradient(to right, #5714F5 47%, #5716C7 71%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        Login
                    </h1>
                    <div className='flex items-center gap-4 pt-5 px-3 w-full flex-col lg:flex-row'>
                        <div className='w-full lg:w-1/2'> <img src={loginImg} alt="" className='rounded-md opacity-50' /> </div>
                        <form
                            onSubmit={handleLogin}
                            className='w-full lg:w-1/2 flex justify-center items-center flex-col gap-5 mt-5 lg:mt-0'>
                            <input type="email"
                                placeholder='Enter you email'
                                className=' w-full p-2 bg-transparent border-b-2 outline-none placeholder:text-gray-50 py-3 rounded-md shadow-2xl'
                                style={{ borderColor: '#5714F5', fontSize: "17px", fontWeight: "500" }}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                            <input type="password"
                                placeholder='Enter you password'
                                className=' w-full p-2 bg-transparent border-b-2 outline-none placeholder:text-gray-50 py-3 rounded-md shadow-2xl'
                                style={{ borderColor: '#5714F5', fontSize: "17px", fontWeight: "500" }}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                            <input type="submit" value="Login" className='w-full border-0 bg-primary text-white font-bold py-3 text-xl rounded-md cursor-pointer shadow-2xl' />
                            <div className='mt-5 flex justify-between items-center gap-10'>
                                <Link to="/register" className='text-lg font-bold'> Not account yet? </Link>
                                <Link to="" className='text-lg font-bold'> Forgot password? </Link>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default Login;