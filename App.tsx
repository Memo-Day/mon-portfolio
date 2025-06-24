import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
  <div>
    <div className="p-5 md:px-[15%]">
      <Navbar/>
    <Home />
    </div> 
    <About/>
    <div className="p-5 md:px-[15%]">
      <Experience />
      <Projects/>
     </div> 
  </div>
  )
}