import styled from "styled-components";
import Image from "../../assets/undrall_well.svg"

export default function SucessCard() {
    return (
        <Page>
            <Mask />
            <Card>
                <img src={Image} alt="Undrall Well" />
                <h1>Pagamendo realizado com sucesso!</h1>
                <h2>O pedido foi encaminhado para a cozinha.</h2>
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