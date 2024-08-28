import { useGetProducts } from "../../customHooks/Products";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const { data, isError, isLoading } = useGetProducts();
    if (isLoading)
        return (
            <>
                <h1>Loading...</h1>
            </>
        );
    if (isError) return <>Error..</>;

    return (
        <div className="grid md:grid-cols-4 gap-4 p-4 pt-20 grid-cols-1 sm:grid-cols-2 place-items-center ">
            {data ? (
                data.map((products) => (
                    <ProductCard key={products.id} product={products} />
                ))
            ) : (
                <>Loading.....</>
            )}
        </div>
    );
};

export default ProductList;
