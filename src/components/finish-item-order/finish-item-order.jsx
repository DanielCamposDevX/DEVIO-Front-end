import { useState } from "react";
import styled from "styled-components"
import Additionals from "./additionals";
import ProductInfos from "./product";



export default function ConfirmItem(props) {

  const [count, setCount] = useState(1);

  return (
    <Page >
      <Mask onClick={() => { props.setShowConfirm(false) }}/>
      <Card>
        <h1>Revise seu pedido!</h1>

        <ProductInfos setCount={setCount} count={count} />
        <Additionals />

        <h2>Observações</h2>
        <Observation placeholder="Adicione uma observação ao pedido" />
      </Card>
    </Page>
  )
}




const Page = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`

const Mask = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    min-height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.2);
    z-index: 1000;
`

const Card = styled.div`
  z-index: 2000;
  font-family: 'Montserrat', sans-serif;
  margin-top: 5vh;
  width: 70%;
  max-height: 95vh;
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 60px;
  border-radius: 12px;
  gap: 60px;
  overflow-y: auto;
  overflow-x: clip;
  scrollbar-width: thin; 
  scrollbar-color: darkgreen lightgray;

  &::-webkit-scrollbar {
    width: 6px; 
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgreen; 
    border-radius: 6px;
  }
`;


const Observation = styled.textarea`
  padding: 15px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  background-color: #ebebeb;
  min-height: 100px;
  border: none;
  border-radius: 12px;
  resize: none;
`
