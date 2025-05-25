import { Mail } from "lucide-react";
const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
        <div className="flex flex-col ">
            <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
            Hello, <br />
            I am{" "}
            <span className="font-bold text-white">Mel</span>
            {" "}
            <span className="font-bold text-orange-600">Software Tester</span>
            </h1>
            <p className="my-4 text-md text-center md:text-left">
               I'm a Software Tester <br />
               experienced in React, Node.js, JavaScript, Python, and GitHub. <br />
               Let’s get in touch! 
            </p>
           <a href="mailto:parmentier59@hotmail.com" className="btn btn-accent gap-2 bg-orange-600  text-black md:w-fit">
            <Mail className="w-5 h-5" />    
            Contact me
            </a>
        </div>
        

        </div>
  )
}

export default Home