/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import { createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        default:
            return state;
    }
};

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);

export default CartProvider;

           {/* Mobile Menu */}
            {/* {isMenuOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        {localStorage.getItem('AuthToken') ? (
                            <>
                                <Link to="/cart" className="border-2 border-sky-500 rounded-lg px-4 py-2 hover:bg-red-800">
                                    My Cart
                                </Link>
                                <button onClick={handleLogout} className="text-red-400 border-2 border-sky-500 rounded-lg px-4 py-2 hover:bg-red-800">
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
            )} */}