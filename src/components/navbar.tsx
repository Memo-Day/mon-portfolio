import { Container } from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex justify-center md:justify-between items-center p-4">
            <a
                href="#"
                className="flex items-center font-bold text-2xl md:text-xl"
            >
                <Container className="mr-2" /> MEL{" "}
                <span className="text-orange-600 ml-1">SOFTWARE-TESTER</span>
            </a>
            <ul
                className="hidden md:flex space-x-4">
                <li>
                    <a href="#" 
                        className="btn btn-sm btn-ghost"
                    >
                     Home  
                    </a>
                </li>  
                 <li>
                    <a href="#" 
                        className="btn btn-sm btn-ghost"
                    >
                     About  
                    </a>
                </li> 
                 <li>
                    <a href="#" 
                        className="btn btn-sm btn-ghost"
                    >
                     Experience  
                    </a>
                </li> 
                <li>
                    <a href="#" 
                        className="btn btn-sm btn-ghost"
                    >
                     Projects  
                    </a>
                </li>    
                    


            </ul>
        </div>
    );
};

export default Navbar;