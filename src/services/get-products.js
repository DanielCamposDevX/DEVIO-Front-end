import axios from "axios"

export async function getProducts(setProducts){
    axios.get(`${import.meta.env.VITE_API_URL}/foods`)
    .then((res) => {
        setProducts(res.data)
    })
}