/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useDispatchCart, useCart } from "./ContextReducer";

const Card = ({ item, options }) => {
    const dispatch = useDispatchCart();
    const data = useCart();

    const [qnty, setQnty] = useState(1);
    const [size, setSize] = useState('');
    const [finalPrice, setFinalPrice] = useState(0);

    // if (!item) {
    //     console.error("Card component received undefined or null item");
    //     return null;
    // }

    let priceOptions = Object.keys(options || {});

    useEffect(() => {
        if (priceOptions.length > 0) {
            setSize(priceOptions[0]);
        }
    }, [priceOptions]);

    useEffect(() => {
        if (size && options[size]) {
            setFinalPrice(qnty * parseInt(options[size]));
        }
    }, [qnty, size, options,]);

    const handleAddToCart = async () => {
        await dispatch({
            type: 'ADD_TO_CART',
            payload: {
                ...item,
                qnty,
                size,
                price: finalPrice,
            },
        });
        console.log(data);
    };

    return (
        <div className="bg-teal-900 text-white rounded-lg overflow-hidden shadow-lg p-4 border-2 solid-black">
            <div className="h-[150px] mb-4">
                <img
                    src={item.img}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>
            <h5 className="text-lg font-bold uppercase text-center">{item.name}</h5>
            <p className="text-xs mt-2 mb-4 font-semibold text-gray-300 text-center">{item.description}</p>
            <div className="flex items-center justify-center space-x-2 mb-4">
                <select
                    className="text-black p-1 rounded"
                    value={qnty}
                    onChange={(e) => setQnty(Number(e.target.value))}
                >
                    {Array.from(Array(6), (e, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
                <select
                    className="text-black p-1 rounded"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                >
                    {priceOptions.map((data) => (
                        <option key={data} value={data}>{data}</option>
                    ))}
                </select>
            </div>
            <div className="text-center font-semibold mb-4">Total Price: Rs {finalPrice}</div>
            <button
                onClick={handleAddToCart}
                className="bg-sky-500 text-white rounded-lg w-full py-2 hover:bg-red-800 transition-colors">
                Add to Cart
            </button>
        </div>
    );
};

export default Card;
