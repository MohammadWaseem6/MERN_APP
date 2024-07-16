const Cart = () => {
    return (
        <div className="grid grid-cols-1 w-full h-full bg-slate-500">
            <div className="min-h-[800px] bg-blue-950 p-4">
                <table className="w-full text-left bg-white rounded-lg shadow-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2">Product</th>
                            <th className="p-2">Price</th>
                            <th className="p-2">Quantity</th>
                            <th className="p-2">Subtotal</th>
                        </tr>
                    </thead>

                </table>
              
                <button className="bg-red-500 text-white rounded-lg w-[100px] mt-5 py-2 hover:bg-yellow-400 transition-colors font-semibold ">Check Cart</button>
            </div>
        </div>
    );
};

export default Cart;
