import { useQuery } from "@tanstack/react-query";
import {
    getAllCryptoData,
    getCoinDetails,
} from "../Api/api.function/getCryptoData";

export const useGetAllCoin = () => {
    return useQuery({
        queryKey: ["allCoin"],
        queryFn: getAllCryptoData,
        staleTime: 0,

        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        retry: 1,
    });
};

export const useGetCoinDetails = (payload: string) => {
    return useQuery({
        queryKey: ["coinDetails", payload],
        queryFn: () => getCoinDetails(payload),
    });
};
