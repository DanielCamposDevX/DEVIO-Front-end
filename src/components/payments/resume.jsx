import styled from "styled-components";
import { FaXmark } from "react-icons/fa6";
import Invoice from "./invoice";
import { useNavigate } from "react-router-dom";

export default function ResumeCard(props) {
    const navigate = useNavigate();

    return (
        <Page>
            <Mask />
            <Card>
                <Close onClick={() => {
                    props.setFinished(2);
                    setTimeout(() => { navigate("/kitchen") }, 2000)
                }}>
                    <FaXmark />
                </Close>
                <Invoice
                    name={props.name}
                    cart={props.cart}
                    total={props.total}
                    pay={props.pay}
                    money={props.money}
                    change={props.change}
                />

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
  width: 50%;
  height: 70vh;
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 60px;
  border-radius: 12px;
  gap: 10px;
  h2{
    font-weight: 400;
  }
  img{
    height: 80%;
    margin-bottom: 20px;
  }
  @media (max-width: 700px) {
        width: 100%;
  }
`;


const Close = styled.button`
    display: flex;
    position: absolute;
    top: -10px;
    right: -10px;
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
    cursor: pointer;
`