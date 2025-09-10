import { Mail, Phone } from "lucide-react";
import img from '../assets/moi.jpg'
const Home = () => {
  return (
    <div id="Home"className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
      <div className="flex flex-col ">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Hello, <br />
          I am{" "}
          <span className="font-bold text-white">Mel</span>
          {" "}
          <span className="font-bold text-orange-600">Software Tester</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          With 4+ years of experience in QA, supported by a <br />strong foundation in OOP, UI and web development. <br />
          I bring both a QA mindset and a dev perspective. <br />
          I'm currently seeking a long-term opportunity <br />within a dynamic team, where I can contribute <br />to impactful projects and continue growing <br />in the QA field both in France and internationally.
          <br /> 
          Let’s get in touch!
        </p>
        <div className="flex items-center space-x-2 mb-4">
          <Phone className="text-accent" />
          <span>+46 7 20 33 01 73</span>
        </div>
        <a href="mailto:parmentier59@hotmail.com" className="btn btn-accent gap-2 bg-orange-600 text-black md:w-fit flex items-center w-max">
          <Mail className="w-5 h-5" />    
          Contact Me
        </a>
      </div>
      <div className="md:ml-60">
        <img
          src={img} alt="" className="w-60 sm:w-72 md:w-80 lg:w-96 h-auto object-cover border-8 shadow-xl"
          style={{
            borderRadius : "30% 70% 70% 30%/ 67% 62% 38% 33%",
            borderColor: '#EA580C',
            backgroundColor: "#EA580C" 
          }} 
        />
      </div>
    </div>
  )
}

export default Home