import { axiosInstence } from "../axios/Axios";
import { AxiosResponse } from "axios";

export type allCoin = {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    priceUsd: string;
};
export type coinDetails = {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    priceUsd: string;
    marketCapUsd: string;
    supply: string;
    volumeUsd24Hr: string;
    vwap24Hr: string;
    changePercent24Hr: string;
    explorer: string;
};

interface ApiResponse {
    data: coinDetails[];
}
interface ApiCoindetailsResponse {
    data: coinDetails;
}

export const getAllCryptoData = async (): Promise<allCoin[]> => {
    const response: AxiosResponse<ApiResponse> = await axiosInstence.get(
        "/assets"
    );

    return response.data.data;
};

export const getCoinDetails = async (payload: string): Promise<coinDetails> => {
    const response: AxiosResponse<ApiCoindetailsResponse> =
        await axiosInstence.get(`/assets/${payload}`);
    return response.data.data;
};
