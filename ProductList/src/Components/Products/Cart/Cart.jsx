import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    decreaseQuantity,
    increaseQuantity,
    removeProduct,
} from "../../../reduxStore/CartSlice";

const Cart = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartProduct);

    const handleIncrease = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseQuantity(id));
    };

    const handleRemove = (id) => {
        dispatch(removeProduct(id));
    };

    const totalPrice =
        cartItems &&
        cartItems.reduce(
            (total, curr) => total + curr.price * curr.quantity,
            0
        );

    return (
        <div className="pt-20">
            <button
                onClick={() => navigation(-1)}
                className="border px-4 py-1 m-3 bg-gray-400 rounded-md hover:bg-gray-500"
            >
                Back
            </button>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
                {cartItems.length > 0 ? (
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-2 px-4 text-left">Image</th>
                                <th className="py-2 px-4 text-left">Product</th>
                                <th className="py-2 px-4 text-left">Price</th>
                                <th className="py-2 px-4 text-left">
                                    Quantity
                                </th>
                                <th className="py-2 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id} className="border-b">
                                    <td className="py-2 px-4">
                                        <img
                                            className="w-20 h-20 object-cover"
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </td>
                                    <td className="py-2 px-4">{item.title}</td>
                                    <td className="py-2 px-4">
                                        $
                                        {(item.price * item.quantity).toFixed(
                                            2
                                        )}
                                    </td>
                                    <td className="py-2 px-4 flex items-center">
                                        <button
                                            className="bg-gray-200 p-2 rounded-l"
                                            onClick={() =>
                                                handleDecrease(item.id)
                                            }
                                        >
                                            -
                                        </button>
                                        <span className="px-4">
                                            {item.quantity}
                                        </span>
                                        <button
                                            className="bg-gray-200 p-2 rounded-r"
                                            onClick={() =>
                                                handleIncrease(item.id)
                                            }
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td className="py-2 px-4">
                                        <button
                                            className="bg-red-500 text-white py-1 px-4 rounded"
                                            onClick={() =>
                                                handleRemove(item.id)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="text-center flex justify-center ">
                        <h1 className="font-semibold text-2xl">
                            No Products...
                        </h1>
                    </div>
                )}
                {/* Total Section */}
                {cartItems.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold">
                            Total: ${totalPrice.toFixed(2)}
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
