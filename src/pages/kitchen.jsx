import styled from "styled-components";
import Header from "../components/page-header"

export default function KitchenPage(){

    return(
        <Page>
            <Header />
            <Main>
                Teste
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
  flex-direction: column;
  gap: 15px;
`;