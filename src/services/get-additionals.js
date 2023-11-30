import axios from "axios";



export async function getAdditionals(setAdditionals) {
    axios.get(`${import.meta.env.VITE_API_URL}/extras`)
        .then((res) => {
            console.log(res.data)
            setAdditionals(res.data)
        })
}