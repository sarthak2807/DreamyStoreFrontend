import axios from "axios";

export async function getAllCategories() {
    const reqUrl = `http://localhost:3001/discover/api/getCategories`;
    const result = await axios.get(reqUrl);
    return result.data;
}