import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import Navbar from "./components/share/Navbar";
import Footer from "./components/share/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="courseDetails" element={<CourseDetails />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
