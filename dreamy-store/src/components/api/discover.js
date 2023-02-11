import axios from "axios";

export async function getAllCategories() {
    const reqUrl = `https://dreamystorebackend.onrender.com/discover/api/getCategories`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getColors() {
    const reqUrl = `https://dreamystorebackend.onrender.com/discover/api/getColors`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getCompanies() {
    const reqUrl = `https://dreamystorebackend.onrender.com/discover/api/getCompanies`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getAllProducts() {
    const reqUrl = `https://dreamystorebackend.onrender.com/discover/api/getProducts`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getProduct(productId) {
    const reqUrl = `https://dreamystorebackend.onrender.com/discover/api/productDetails/${productId}`;
    const result = await axios.get(reqUrl);
    return result.data;
}