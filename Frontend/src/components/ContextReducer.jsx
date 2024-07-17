/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars

import { createContext, useContext, useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            console.log("Adding to cart:", action.payload);
            return [...state, action.payload];

        case 'REMOVE':
            let newArray = [...state];
            newArray.splice(action.index, 1);
            return newArray;

        case 'UPDATE':
            console.log("Updating cart:", action);
            let arr = [...state];
            arr = arr.map((food) => {
                if (food.id === action.id && food.size === action.size) {
                    return {
                        ...food,
                        qnty: parseInt(food.qnty) + parseInt(action.qnty),
                        price: food.price + action.price
                    };
                }
                return food;
            });
            console.log("Updated array:", arr);
            return arr;

        default:
            console.log("error: unknown action");
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
