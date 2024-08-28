import axios from "axios";

export const getProductDetails = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);

    return response.data;
};
