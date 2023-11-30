import styled from "styled-components"
import { FaCheck, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { deleteOrders } from "../../services/delete-orders";
import { updateOrders } from "../../services/update-order";
import { useNavigate } from "react-router-dom";




export function Order(props) {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);


    return (
        <Main>
            {props.order &&
                (<Holder >
                    <OrderPic onClick={() => { setOpen(!open) }} src={props.order.orderItems[0].food.picture} />

                    <OrderTitleHolder onClick={() => { setOpen(!open) }}>
                        <h2>{props.order.id} - {props.order.name}</h2>
                        {props.order.orderItems && props.order.orderItems.map((item) => (
                            <h3>{item.quantity} x {item.food.name}</h3>
                        ))}
                    </OrderTitleHolder>

                    <ButtonsHolder>
                        <Cancel>
                            <FaXmark onClick={
                                () => { deleteOrders(props.order.id, navigate) }
                            } />
                        </Cancel>
                        <Confirm>
                            <FaCheck onClick={
                                () => { updateOrders(props.order.id, props.order.name, "READY", null, navigate) }
                            } />
                        </Confirm>
                    </ButtonsHolder>
                </Holder>)
            }

            {
                open && (
                    <Expansion>
                        <h2>Observações:</h2>
                        {props.order.orderItems && props.order.orderItems.map((item) => (
                            item.observation && (
                                <>
                                    <h3>{item.food.name}:</h3>
                                    <textarea key={item.id} disabled>{item.observation}</textarea>
                                </>
                            )
                        ))}
                    </Expansion>
                )
            }
        </Main>
    )
}




const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 90%;
    border-radius: 12px;
    box-shadow: 2px 2px 6px 3px #1b8a1b34;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    min-height: 60px;
    cursor: pointer;
`

const Holder = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding-top: 10px;
    padding-bottom: 10px;
`

const OrderPic = styled.img`
    height: 50px;
    border-radius: 10px;
    box-shadow: 2px 2px 6px 3px #1b8a1b34;
`

const OrderTitleHolder = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 8px;
`

const ButtonsHolder = styled.div`
    display: flex;
    gap: 10px;
`

const Confirm = styled.button`
    background-color: #90ee90ba;
    color: darkgreen;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    border: none;
`

const Cancel = styled.button`
    background-color: #f36a6a9e;
    color: red;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    border: none;

`

const Expansion = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    gap: 20px;
    textarea{
        box-sizing: border-box;
        resize: none;
        padding: 10px;
        min-height: 60px;
    }
`