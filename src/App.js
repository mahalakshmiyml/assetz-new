import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import TopHeader from './Components/Includes/TopHeader';
import Footer from './Components/Includes/Footer';
// import Blogs from './Components/Home/Blogs';
import Success from './Components/Home/Success';
import SixtyThreeEast from './Components/SixtyThreeEast/SixtyThreeEast';
import EarthEssence from './Components/EarthEssence/EarthEssence';
import AssetzMarq from './Components/AssetzMarq/AssetzMarq';
import Downtown from './Components/Downtown/Downtown';
import SunSanctum from './Components/SunSanctum/SunSanctum';

function App() {
  return (
    <Router>
        <TopHeader />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/projects/sixty-three-east" element={<SixtyThreeEast />}></Route>
          <Route path="/projects/earth-essence" element={<EarthEssence />}></Route>
          <Route path="/projects/assetz-marq" element={<AssetzMarq />}></Route>
          <Route path="/projects/downtown" element={<Downtown />}></Route>       
          <Route path="/projects/sun-sanctum" element={<SunSanctum />}></Route>
          {/* <Route path="/blogs" element={<Blogs />}></Route> */}
          <Route path="/success" element={<Success />}></Route>
        </Routes>  
        <Footer />
    </Router>
  );
}

export default App;
