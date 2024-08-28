import axios from "axios";

export const axiosInstence = axios.create({
    baseURL: "https://api.coincap.io/v2",
});
