import axios from "axios"

export async function updateOrders(id, name, status, setFinished, navigate) {

    if (setFinished) {
        setFinished(true);
    }
    console.log("A")
    axios.patch(`${import.meta.env.VITE_API_URL}/orders/${id}`, { name, status })
        .then((res) => {
            console.log(res.data);
            setTimeout(() => navigate(0), 2000);
        })
        .catch((err) => {
            alert(err.response.data);
            setFinished(false);
        })
}