import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

import Navbar from "./components/share/Navbar";
import Footer from "./components/share/Footer";
import CourseOutline from "./components/CourseDetails/CourseOutline";
// default styling
import 'reactflow/dist/style.css';
// or if you just want basic styles
import 'reactflow/dist/base.css';
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Profile from "./components/User/Profile";
import Course from "./components/course/Course";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/courseOutline" element={<CourseOutline />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/course" element={<Course />}></Route>
        <Route path="/about" element={<About/>}></Route>
        {/* protected route  */}
        <Route path="/profile" element={<Profile />}></Route>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
