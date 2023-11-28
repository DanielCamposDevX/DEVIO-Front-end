import { useState } from "react"
import Header from "./components/page-header"
import styled from "styled-components"
import { FaSearch } from "react-icons/fa";


function App() {

  const [search, setSearch] = useState("");


  return (
    <Page>
      <Header />
      <Main>
        <h1>Seja bem vindo!</h1>
        <SearchGroup>
          <input type="text" placeholder="O que você procura?" value={search} onChange={e => setSearch(e.target.value)} />
          <SearchButton>
            <FaSearch />
          </SearchButton>
        </SearchGroup>

      </Main>
    </Page>
  )
}

export default App


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

  h1{
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 1px;
  }
`;


const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  border: none;
  width: 30%;
  background-color: #f3f3f3;
  border-radius: 5px;
  box-shadow: 1px 1px 1px -1px rgba(145,145,145,1);
  transition: outline ease-in-out 0.4s; /* Adicionando uma transição suave para a borda */

  &:hover {
    outline: 1px solid darkgreen; /* Adicione a cor e o estilo da borda desejados */
  }
  input{
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 400;
    background-color: transparent;
    border: none;
    width: 87%;
    height: 100%;
    padding: 13px;
  };
`

const SearchButton = styled.button`
  padding: 13px;
  width: 12%;
  height: 100%;
  cursor: pointer;
  border: none;
  color: gray;
`