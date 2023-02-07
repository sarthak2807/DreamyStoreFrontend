import axios from "axios";

export async function getAllCategories() {
    const reqUrl = `http://localhost:3001/discover/api/getCategories`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getColors() {
    const reqUrl = `http://localhost:3001/discover/api/getColors`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getCompanies() {
    const reqUrl = `http://localhost:3001/discover/api/getCompanies`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getAllProducts() {
    const reqUrl = `http://localhost:3001/discover/api/getProducts`;
    const result = await axios.get(reqUrl);
    return result.data;
}