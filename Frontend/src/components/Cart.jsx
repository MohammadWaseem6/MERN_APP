import { useCart, useDispatchCart } from "./ContextReducer";
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
    let data = useCart();
    let dispatch = useDispatchCart();

    if (data.length === 0) {
        return (
            <div className="text-center bg-slate-900 w-full h-full text-white font-semibold">
                <h1 className="w-full">Cart is empty</h1>
            </div>
        );
    }

    let totalPrice = data.reduce((total, food) => total + food.price, 0);

    return (
        <div className="grid grid-cols-1 w-full h-full bg-slate-500">
            <div className="min-h-[800px] bg-blue-950 p-4">
                <table className="w-full text-left bg-white rounded-lg shadow-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 bg-red-600">#</th>
                            <th className="p-2 bg-orange-500">Name</th>
                            <th className="p-2 bg-green-500">Quantity</th>
                            <th className="p-2 bg-pink-500">Option</th>
                            <th className="p-2">Amount</th>
                            <th className="p-2"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-blue-900 font-semibold text-2xl text-white uppercase">
                        {data.map((food, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{food.name}</td>
                                <td>{food.qnty}</td>
                                <td>{food.size}</td>
                                <td>{food.price}</td>
                                <td>
                                    <button
                                        className="relative group"
                                        onClick={() => dispatch({ type: "REMOVE", index: index })}
                                    >
                                        <FaTrash />
                                        <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            Remove Item
                                        </span>
                                        
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="bg-purple-500 text-2xl font-extrabold text-white mt-5 p-4 rounded-lg">
                    <h1>Total Price: {totalPrice} /-</h1>
                </div>
            </div>
        </div>
    );
};

export default Cart;
