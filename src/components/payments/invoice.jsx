import styled from "styled-components"

export default function Invoice(props) {

    function calculateTotal(cart) {
        return cart.reduce((total, item) => total + item.price, 0) / 100;
    }

    return (
        <>
            {props.cart.length > 0 && (
                <Main>
                    <h1>{props.name} pagou em {props.pay}</h1>
                    
                    {(
                        props.cart.map((item, index) => (
                            <Item key={index}><h3>{item.quantity} x {item.name || item.food.name}</h3> <h3>{(item.price / 100 || item.food.price / 100).toFixed(2)}</h3></Item>
                        ))
                    )}

                    <Total>
                        <h3>Total do pedido</h3>
                        <h2>R$ {props.total ? (props.total / 100).toFixed(2) : calculateTotal(props.cart).toFixed(2)}</h2>
                        {props.pay === "Dinheiro" && (
                            <>
                                <h2>Pago: {props.money}</h2>
                                <h2>Troco: {props.change}</h2>
                            </>
                        )}
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
    @media (max-width: 700px) {
        width: 95%;
  }
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
    gap: 10px;
`