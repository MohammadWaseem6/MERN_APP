import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHamburger } from "react-icons/fa"; 
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#1d2525] text-white">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                <div className="flex items-center">
                    <NavLink to="/" className="text-xl font-bold">
                        FOODIE
                    </NavLink>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <NavLink to="/login" className="border-2 border-sky-500 rounded-lg px-4 py-2 hover:bg-teal-800" activeClassName="bg-teal-800">
                        Login
                    </NavLink>
                    <NavLink to="/signup" className="border-2 border-sky-500 rounded-lg px-4 py-2 hover:bg-teal-800" activeClassName="bg-teal-800">
                        Sign Up
                    </NavLink>
                </div>
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <FaHamburger className="w-6 h-6" />
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 right-0 border-2 w-auto py-2 px-4 bg-black text-center">
                        <NavLink to="/login" className="block text-white py-1 hover:bg-teal-800 rounded-lg" activeClassName="bg-teal-800">
                            Login
                        </NavLink>
                        <NavLink to="/signup" className="block text-white py-1 hover:bg-teal-800 rounded-lg" activeClassName="bg-teal-800">
                            Sign Up
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
