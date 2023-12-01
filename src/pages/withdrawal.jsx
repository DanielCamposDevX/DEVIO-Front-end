import { useState, useEffect } from "react";
import { getOrders } from "../services/get-orders";
import styled from "styled-components";
import Header from "../components/page-header";
import Loading from "../components/home/loading";

export default function WithdrawPage() {


    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const Id = localStorage.getItem("timeout");
        clearInterval(Number(Id));
        getOrders(setOrders)
    }, [])


    return (
        <Page>
            <Header />
            <Main>
                <Doing>
                    <h1>Preparando:</h1>
                    {orders.length > 0 ?
                        orders.map((order) => {
                            if (order.status === "PAYED") {
                                return <h2>{order.name}</h2>;
                            } else {
                                return null;
                            }
                        }):
                        (<Loading />)
                    }
                </Doing>

                <Done>
                    <h1>Pronto:</h1>
                    {orders.length > 0 ?
                        orders.map((order) => {
                            if (order.status === "READY") {
                                return <h2>{order.name}</h2>;
                            } else {
                                return null;
                            }
                        }):
                        (<Loading />)
                    }
                </Done>
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
  margin-top: 60px;
  width: 85%;
  min-height: 100px;

  display: flex;
  h1{
    font-size: 29px;
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 30px;
  }
  h2{
    font-size: 50px;
    font-weight: 800;
    letter-spacing: 1px;
  }
  @media (max-width: 700px) {
        flex-direction: column;
  }
`;


const Doing = styled.div`
  width: 50%;
  border-right: 1px solid black;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 700px) {
        width: 100%;
        border: none;
  }
`


const Done = styled.div`
  width: 50%;
  height:100%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;

  h2 {
    color: #06f106;
  }
  @media (max-width: 700px) {
        width: 100%;
        padding-left: 0px;
        margin-bottom: 30px;
        align-items: start;
  }
`
