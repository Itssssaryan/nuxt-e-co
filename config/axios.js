import axios from "axios";

export const axiosApi = axios.create({
    baseURL: "http://ecommerce.codeitapps.com/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}); 