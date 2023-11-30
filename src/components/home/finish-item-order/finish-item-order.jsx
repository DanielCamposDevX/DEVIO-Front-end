import { useState, useEffect } from "react";
import styled from "styled-components"
import Additionals from "./additionals";
import ProductInfos from "./product";
import { getAdditionals } from "../../../services/get-additionals";
import MiniCheckOut from "./mini-checkout";
import { FaXmark } from "react-icons/fa6";




export default function ConfirmItem(props) {

  const [count, setCount] = useState(1);
  const [observation, setObservation] = useState("")
  const [selectedExtra, setSelectedExtra] = useState([]);
  const [additionals, setAdditionals] = useState();

  useEffect(() => {
    getAdditionals(setAdditionals);
  }, [])

  function handleSubmit() {
    const total = (props.product.price * count) + additionals.reduce((total, item) => selectedExtra.includes(item.id) ? total + item.price : total, 0)

    const prevCart = props.cart
    props.setCart([...prevCart, {
      extras: selectedExtra,
      quantity: count,
      foodId: props.product.id,
      observation: observation,
      price: total,
      name: props.product.name
    }])
    props.setShowConfirm(false)
  }


  const handleCheckboxChange = (additionalId, isChecked) => {
    if (isChecked) {
      setSelectedExtra(prevSelected => [...prevSelected, additionalId]);
    } else {
      setSelectedExtra(prevSelected => prevSelected.filter(id => id !== additionalId));
    }
  };

  return (
    <Page >
      
      <Mask onClick={() => { props.setShowConfirm(false) }} />
      <Card>
      <Close onClick={() => { props.setShowConfirm(false) }}>
        <FaXmark />
      </Close>
        <h1>Revise seu pedido!</h1>

        <ProductInfos
          setCount={setCount}
          count={count}
          product={props.product}
        />

        <Additionals
          setSelected={setSelectedExtra}
          selected={selectedExtra}
          additionals={additionals}
          handleCheckboxChange={handleCheckboxChange}
        />

        <h2>Observações</h2>
        <Observation placeholder="Adicione uma observação ao pedido" value={observation} onChange={e => { setObservation(e.target.value) }} />

        <MiniCheckOut cart={props.product} count={count} additionals={additionals ? additionals.filter(additional => selectedExtra.includes(additional.id)) : null} />
        <ButtonHolder>
          <Continue onClick={() => handleSubmit()}>Continuar Comprando</Continue>
          <Finish onClick={() => handleSubmit()}>Finalizar pedido</Finish>
        </ButtonHolder>
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
  position: relative;
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
  @media (max-width: 700px) {
      margin-top: 0px;
      width: 100%;
      height: 100%;
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

const ButtonHolder = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const Finish = styled.button`
  font-family: 'Montserrat', sans-serif;
  width: 200px;
  padding: 20px;
  background-color: green;
  border: none;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600px;
  &:hover{
    background-color: darkgreen;
  }
  @media (max-width: 700px) {
        width: 40%;
        padding: 10px;
  }
`;

const Continue = styled.button`
  font-family: 'Montserrat', sans-serif;
  width: 250px;
  padding: 20px;
  border: 2px solid gray;
  color: gray;
  border-radius: 12px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600px;
  &:hover{
    background-color: gray;
    color: white;
  }
  @media (max-width: 700px) {
        width: 45%;
        padding: 10px;
  }
`

const Close = styled.button`
  display: none;
  @media (max-width: 700px) {
        display: flex;
        position: fixed;
        top: 60px;
        right: 10px;
        border-radius: 1000px;
        height: 40px;
        width: 40px;
        z-index: 10000;
        justify-content: center;
        align-items: center;
        background-color: darkgreen;
        border: 1px solid rgba(0,0,0,0.25);
        box-shadow: 2px 2px 6px 3px #1b8a1b34;
        color: white;
  }
`