import React, { Fragment, useState } from 'react';
import loginImg from "../../images/user/register.png";
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log({ email, password, name })
    }
    return (
        <Fragment>
            <div className='w-full h-screen flex justify-center items-center'>
                <div className="w-1/2 h-auto py-5 bg-secondary rounded-md">
                    <h1
                        className="text-center py-5 text-6xl font-bold border-b-gray-200 border-b-2 border-dashed px-12 text-transparent"
                        style={{
                            backgroundImage: "linear-gradient(to right, #5714F5 47%, #5716C7 71%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        Register
                    </h1>
                    <div className='flex items-center gap-4 pt-5 px-3 w-full'>
                        <div className='w-1/2'> <img src={loginImg} alt="" className='rounded-md opacity-50' /> </div>
                        <form
                            onSubmit={handleLogin}
                            className='w-1/2 flex justify-center items-center flex-col gap-5'>
                            <input type="text"
                                placeholder='Enter you name'
                                className=' w-full p-2 bg-transparent border-b-2 outline-none placeholder:text-gray-50 py-3 rounded-md shadow-2xl'
                                style={{ borderColor: '#5714F5', fontSize: "17px", fontWeight: "500" }}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input type="email"
                                placeholder='Enter you email'
                                className=' w-full p-2 bg-transparent border-b-2 outline-none placeholder:text-gray-50 py-3 rounded-md shadow-2xl'
                                style={{ borderColor: '#5714F5', fontSize: "17px", fontWeight: "500" }}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input type="password"
                                placeholder='Enter you password'
                                className=' w-full p-2 bg-transparent border-b-2 outline-none placeholder:text-gray-50 py-3 rounded-md shadow-2xl'
                                style={{ borderColor: '#5714F5', fontSize: "17px", fontWeight: "500" }}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input type="submit" value="Signup" className='w-full border-0 bg-primary text-white font-bold py-3 text-xl rounded-md  cursor-pointer shadow-2xl' />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Register;