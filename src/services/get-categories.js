import axios from "axios";



export async function getCategories(setCategories) {
    axios.get(`${import.meta.env.VITE_API_URL}/categories`)
        .then((res) => {
            setCategories(res.data)
        })
}