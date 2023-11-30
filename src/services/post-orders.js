import axios from "axios"

export async function postOrders(cart,setOrdered) {

    const updatedCart = cart.map(item => {
        const { price, name, ...rest } = item;
        return rest;
    });
    console.log({ items: updatedCart })
    axios.post(`${import.meta.env.VITE_API_URL}/orders`, { items: updatedCart })
        .then((res) => {
            console.log(res.data);
            setOrdered(res.data);
        })
        .catch((err) => {
            alert(err.response.data);
        })
}