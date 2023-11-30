import axios from "axios"

export async function deleteOrders(id,navigate) {

    axios.delete(`${import.meta.env.VITE_API_URL}/orders/${id}`)
        .then(() => {
            navigate(0);
})
        .catch ((err) => {
    alert(err.response.data);
})
}