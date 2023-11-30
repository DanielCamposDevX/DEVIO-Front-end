import axios from "axios"

export async function updateOrders(id, name, status, setFinished) {

    axios.patch(`${import.meta.env.VITE_API_URL}/orders/${id}`, { name, status })
        .then((res) => {
            setFinished(1);
        })
        .catch((err) => {
            alert(err.response.data);
            setFinished(false);
        })
}