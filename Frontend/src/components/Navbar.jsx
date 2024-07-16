import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import Cart from "./Cart";


import { FaShoppingCart } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { useCart } from "./ContextReducer";



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartView, setCartView] = useState(false);
    let data = useCart();

    // remove token to logout
    const handleLogout = () => {
        localStorage.removeItem('AuthToken');
        window.location.reload();
    };

    return (
        <div className="bg-[#124076] text-white">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                <div className="flex items-center">
                    <NavLink to="/" className="text-xl font-bold">
                        FOODIE
                    </NavLink>
                </div>

                {/* this is my page after Logged in */}
                <div className="flex items-center space-x-4">
                    {localStorage.getItem('AuthToken') ? (
                        <>
                            <div className="hidden md:flex items-center space-x-4">
                                <button
                                    onClick={() => setCartView(true)}
                                    className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-red-800 transition-colors duration-300 ease-in-out cursor-pointer"
                                >
                                  
                                    <FaShoppingCart className="text-3xl" title="check my Cart" />
                                    
                                </button>
                                <button onClick={handleLogout} className="rounded-lg  hover:bg-green-400">

                                    <IoMdLogOut className="text-3xl" title="Logout" />

                                </button>
                            </div>
                        </>
                    ) : (
                        //home page
                        <div className="hidden md:flex items-center space-x-4">
                            <NavLink to="/login" className="border-2 border-sky-500 rounded-lg px-4 py-2 hover:bg-red-800">
                                Login
                            </NavLink>
                            <NavLink to="/signup" className="border-2 border-sky-500 rounded-lg px-4 py-2 hover:bg-red-800">
                                Sign Up
                            </NavLink>
                        </div>
                    )}

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            {/* <svg
                              className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                ></path>
                            </svg> */}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        {localStorage.getItem('AuthToken') ? (
                            <>
                                <button
                                    onClick={() => setCartView(true)}
                                    className="flex items-center space-x-2 border-2 border-sky-500 rounded-lg px-4 py-2 hover:bg-red-800 transition-colors duration-300 ease-in-out cursor-pointer"
                                >
                                    <span>My Cart</span>
                                </button>
                                <button onClick={handleLogout} className=" text-red-400 border-2 border-sky-500 rounded-lg px-4 py-2 hover:bg-red-800">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login" className="border-2 border-sky-500 rounded-lg px-4 py-2 hover:bg-red-800">
                                    Login
                                </NavLink>
                                <NavLink to="/signup" className="border-2 border-sky-500 rounded-lg px-4 py-2 hover:bg-red-800">
                                    Sign Up
                                </NavLink>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Cart Modal */}
            {cartView && (
                <Modal onClose={() => setCartView(false)}>
                    <Cart />
                </Modal>
            )}
        </div>
    );
};

export default Navbar;
