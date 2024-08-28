import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../Api/api.productdetails";

export const useGetProducts = () => {
    return useQuery({
        queryKey: ["productList"],
        queryFn: getProductDetails,
        staleTime: 2 * 1000,
    });
};
