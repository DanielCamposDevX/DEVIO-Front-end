import axios from "axios";



export async function getOrders(setOrders) {
    const timeId = setInterval(() => onlineOrders(setOrders), 5000)
    localStorage.setItem("timeout", timeId);

    axios.get(`${import.meta.env.VITE_API_URL}/orders`)
        .then((res) => {
            console.log(res.data)
            setOrders(res.data)
        })
}

async function onlineOrders(setOrders) {
    axios.get(`${import.meta.env.VITE_API_URL}/orders`)
        .then((res) => {
            console.log(res.data)
            setOrders(res.data)
        })
}