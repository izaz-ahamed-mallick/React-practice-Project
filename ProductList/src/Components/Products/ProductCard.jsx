import { useDispatch } from "react-redux";
import { addToCart } from "../../reduxStore/CartSlice";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        alert(`${product.title} added to cart!`);
        dispatch(addToCart({ ...product }));
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img
                className="w-full h-60 object-cover"
                src={product.image}
                alt={product.title}
            />
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{product.title}</h2>
                <p className="text-gray-700 text-base">
                    {product.description.slice(0, 100)}....
                </p>
                <p className="text-gray-900 font-bold mt-2">${product.price}</p>
                <p className="text-gray-600 text-sm">
                    Category: {product.category}
                </p>
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
                <span className="text-yellow-500">
                    {Array(Math.round(product.rating.rate)).fill("⭐")}
                </span>
                <span className="text-gray-600 ml-2">
                    ({product.rating.count} reviews)
                </span>
            </div>
            <div className="px-6 py-4">
                <button
                    onClick={handleAddToCart}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
