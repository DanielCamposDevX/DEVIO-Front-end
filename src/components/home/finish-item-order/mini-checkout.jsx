import styled from "styled-components"

export default function MiniCheckOut(props) {

    function calculateTotal() {
        return (props.cart.price * props.count + (props.additionals ? props.additionals.reduce((total, item) => total + item.price, 0) : 0)) / 100
    }

    return (
        <>
            <Main>
                <Item><h3>{props.count} x {props.cart.name}</h3> <h3>{(props.cart.price * props.count / 100).toFixed(2)}</h3></Item>
                {props.additionals && props.additionals.map((extra) => (
                    <Item><h3>{extra.name}</h3> <h3>{(extra.price / 100).toFixed(2)}</h3></Item>
                ))}

                <Total>
                    <h3>Total do pedido</h3>
                    <h2>R$ {calculateTotal().toFixed(2)}</h2>
                </Total>
            </Main>
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