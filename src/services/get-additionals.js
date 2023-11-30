import axios from "axios";



export async function getAdditionals(setAdditionals) {
    axios.get(`${import.meta.env.VITE_API_URL}/extras`)
        .then((res) => {
            setAdditionals(res.data)
        })
}