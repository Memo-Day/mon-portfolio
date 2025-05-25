import Home from "./components/Home";
import Navbar from "./components/navbar";

export default function App() {
  return (
  <div>
    <div className="p-5 md:px-[15%]">
      <Navbar/>
    <Home />
    </div> 
  </div>
  )
}