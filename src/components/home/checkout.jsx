import styled from "styled-components"

export default function CheckOut(props) {

    function calculateTotal(cart) {
        return cart.reduce((total, item) => total + item.price, 0) / 100;
    }

    return (
        <>
            {props.cart.length > 0 && (<Main>
                {(
                    props.cart.map((item, index) => (
                        <Item key={index}><h3>{item.quantity} x {item.name || item.food.name}</h3> <h3>{(item.price / 100 || item.food.price / 100).toFixed(2)}</h3></Item>
                    ))
                )}

                <Total>
                    <h3>Total do pedido</h3>
                    <h2>R$ {props.total ? (props.total / 100).toFixed(2) : calculateTotal(props.cart).toFixed(2)}</h2>
                </Total>
            </Main>
            )}
        </>
    )
}



const Main = styled.div`
    width: 100%;
    border-radius: 12px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    border: 1px solid black;
`

const Item = styled.div`
    display: flex;
    justify-content: space-between;
`

const Total = styled.div`
    padding-top: 10px;
    border-top: 1px dashed black;
    display: flex;
    flex-direction: column;
`