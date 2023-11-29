import { useState } from "react"
import Header from "../components/page-header"
import styled from "styled-components"
import { FaSearch } from "react-icons/fa";
import Categories from "../components/categories/categories";
import Products from "../components/produtos/products"

export default function HomePage() {

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

        <Categories />

        <Products />

        <ButtonHolder>
          <Cancel>Cancelar</Cancel>
          <Finish>Finalizar pedido</Finish>
        </ButtonHolder>
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

  h1{
    font-size: 29px;
    font-weight: 800;
    letter-spacing: 1px;
  }
  h2{
    font-size: 22px;
    font-weight: 800;
    letter-spacing: 1px;
  }
  h3{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
  }

`;


const SearchGroup = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  border: none;
  width: 30%;
  background-color: #f3f3f3;
  border-radius: 5px;
  border: 1px solid rgba(1, 197, 50, 0.2);
  transition: outline ease-in-out 0.4s;

  &:hover {
    outline: 1px solid darkgreen;
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
`;

const ButtonHolder = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 20px;
  margin-bottom: 60px;
`;

const Finish = styled.button`
  width: 300px;
  padding: 20px;
  background-color: gray;
  color: white;
  border-radius: 12px;
  cursor: pointer;
`;

const Cancel = styled.button`
  width: 300px;
  padding: 20px;
  border: 2px solid gray;
  color: gray;
  border-radius: 12px;
  cursor: pointer;
`