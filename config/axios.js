import axios from "axios";

export const axiosApi = axios.create({
    baseURL: "https://ecommerce.codeitapps.com/api/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}); 