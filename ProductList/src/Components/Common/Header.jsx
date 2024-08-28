import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const cartItems = useSelector((state) => state.cart.cartProduct);
    const totalItem =
        cartItems &&
        cartItems?.reduce((total, curr) => total + curr.quantity, 0);
    return (
        <header className="bg-gray-800 fixed w-full text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">ProductList</div>
            <button className="bg-blue-500 min-w-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to={"/cart"}>
                    Cart{" "}
                    {cartItems && cartItems.length > 0 && (
                        <span className="w-10">{totalItem}</span>
                    )}
                </Link>
            </button>
        </header>
    );
};

export default Header;
