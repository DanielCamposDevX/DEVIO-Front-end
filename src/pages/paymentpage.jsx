import Header from "../components/page-header"
import styled from "styled-components";
import { LuWallet } from "react-icons/lu";
import { useState } from "react";
import { updateOrders } from "../services/update-order";
import { useNavigate } from "react-router-dom";
import CheckOut from "../components/home/checkout";
import ResumeCard from "../components/payments/resume";
import SucessCard from "../components/payments/sucess-card";
import PaymentMethod from "../components/payments/method";


export default function PaymentPage(props) {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [method, setMethod] = useState();
    const [money, setMoney] = useState(0);
    const [finished, setFinished] = useState(0);


    const change = ((money - (props.ordered ? props.ordered.total / 100 : 0))).toFixed(2);


    const methods = [{ id: 1, name: "Crédito" }, { id: 2, name: "Débito" }, { id: 3, name: "Dinheiro" }]

    return (
        <Page>
            <Header />
            <Main>
                <Resume>
                    <Title>
                        <CustomLogo />
                        <h1>Pagamento</h1>
                    </Title>
                    <h2>Resumo da Compra</h2>
                    {props.ordered && <CheckOut cart={props.ordered.orderItems} total={props.ordered.total} />}
                    <InputContainer>
                        <div>
                            <label><h2>Nome do Cliente</h2></label>
                            <NameInput type="text" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div>
                            <label><h2>Código</h2></label>
                            <CodeInput disabled type="text" value={props.ordered ? props.ordered.id : 0} />
                        </div>
                    </InputContainer>
                </Resume>
                <Payment>
                    <h2>
                        Selecione a forma de pagamento:
                    </h2>
                    <PaymentHolder>
                        {methods.map((pay) => (
                            <PaymentMethod key={pay.id} method={pay} setMethod={setMethod} selected={method} />
                        ))}
                        {method && method.id === 3 && (
                            <InputContainer>
                                <div>
                                    <label><h2>Entregue</h2></label>
                                    <CodeInput
                                        type="text"
                                        value={money}
                                        onChange={(e) => setMoney(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label><h2>Troco</h2></label>
                                    <CodeInput type="text" disabled={true} value={change} />
                                </div>

                            </InputContainer>
                        )}

                        <ButtonHolder>
                            <Cancel >Cancelar</Cancel>
                            <Finish onClick={() => updateOrders(props.ordered.id, name, "PAYED", setFinished)}>
                                Pagar
                            </Finish>
                        </ButtonHolder>
                    </PaymentHolder>
                </Payment>
                {finished === 1 &&
                    <ResumeCard
                        cart={props.ordered.orderItems}
                        total={props.ordered.total}
                        pay={method.name}
                        money={money}
                        change={change}
                        name={name}
                        setFinished={setFinished}
                    />
                }
                {finished === 2 &&
                    <SucessCard />
                }
            </Main>
        </Page>

    )
}

const Page = styled.div`
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin-top: 60px;
  width: 75%;
  min-height: 100px;

  display: flex;
  h1{
    font-size: 20px;
    font-weight: 800;
    letter-spacing: 1px;
  }
  h2{
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 1px;
  }
  @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
  }
`;


const Resume = styled.div`
    width: 50%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 700px) {
        align-items: center;
  }
`


const Payment = styled.div`
    width: 50%;
    height:100%;  
    padding-left: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (max-width: 700px) {
        align-items: center;
  }
`

const PaymentHolder = styled.div` 
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (max-width: 700px) {
        margin-right: 40px;
        align-items: center;
  }
`


const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const CustomLogo = styled(LuWallet)`
    color: darkgreen;
    font-size: 25px;
    border-radius: 100px;
`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const NameInput = styled.input`
    background-color: lightgray;
    border: none;
    border-radius: 8px;
    padding: 5px;
    margin-top: 5px;
`

const CodeInput = styled.input`
    background-color: lightgray;
    border: none;
    border-radius: 8px;
    padding: 5px;
    width: 60px;
    margin-top: 5px;
`

const ButtonHolder = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  display: flex;
  gap: 20px;
  margin-bottom: 60px;
  @media (max-width: 700px) {
    align-self: center;
  justify-self: center;
  }
`;

const Finish = styled.button`
  border: none;
  width: 100px;
  padding: 10px;
  background-color: green;
  color: white;
  border-radius: 12px;
  cursor: pointer;
  &:hover{
    background-color: darkgreen
  }
  &:disabled{
    background-color: gray
  }
  @media (max-width: 700px) {
        width: 100px;
        padding: 5px;
  }
`;

const Cancel = styled.button`
  width: 100px;
  padding: 10px;
  border: 2px solid gray;
  color: gray;
  border-radius: 12px;
  cursor: pointer;
  &:hover{
    color: white;
    background-color: gray;
  }
  @media (max-width: 700px) {
        width: 100px;
        padding: 10px;
  }
`

