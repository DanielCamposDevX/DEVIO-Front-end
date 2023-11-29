import styled from "styled-components"
import { FaCheck, FaXmark } from "react-icons/fa6";
import { useState } from "react";




export function Order() {

    const [open, setOpen] = useState(false);


    return (
        <Main>
            <Holder onClick={() => { setOpen(!open) }}>
                <OrderPic src="https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75" />
                <OrderTitleHolder>
                    <h2>201 - Ricardo</h2>
                    <h3>1x Smash da Casa</h3>
                </OrderTitleHolder>
                <ButtonsHolder>
                    <Cancel><FaXmark /></Cancel>
                    <Confirm><FaCheck /></Confirm>
                </ButtonsHolder>
            </Holder>

            {
                open && (
                    <Expansion>
                        <h1>Observações</h1>
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
    align-items: center;
`

const OrderPic = styled.img`
    height: 50px;
    border-radius: 10px;
    box-shadow: 2px 2px 6px 3px #1b8a1b34;
`

const OrderTitleHolder = styled.div`
    display: flex;
    flex-direction: column;
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

`