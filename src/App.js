import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import CourseDetails from "./components/CourseDetails/CourseDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="courseDetails" element={<CourseDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;