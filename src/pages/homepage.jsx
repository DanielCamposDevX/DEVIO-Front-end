import { useState, useEffect } from "react"
import Header from "../components/page-header"
import styled from "styled-components"
import { FaSearch } from "react-icons/fa";
import Categories from "../components/home/categories/categories";
import Products from "../components/home/produtos/products"
import ConfirmItem from "../components/home/finish-item-order/finish-item-order";
import { getProducts } from "../services/get-products"
import CheckOut from "../components/home/checkout";
import { postOrders } from "../services/post-orders";
import { useNavigate } from "react-router-dom";

export default function HomePage(props) {

  const navigate = useNavigate()

  const [search, setSearch] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [selected, setSelected] = useState();
  const [products, setProducts] = useState();
  const [filtered, setFiltered] = useState();
  const [filterCat, setFilterCat] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts(setProducts);
    const Id = localStorage.getItem("timeout");
    clearInterval(Number(Id));
  }, [])
  useEffect(() => {
    if (products) {
      const filteredProducts = products.filter((product) =>
        filterCat ? product.categorieId === filterCat : true
      );
      setFiltered(filteredProducts);
    }
  }, [filterCat])

  function handleSearch(e) {
    console.log(e)
    const searchText = e.toLowerCase();

    if (products) {
      const filteredProducts = products.filter((product) =>
        product.id === parseFloat(searchText) ||
        product.name.toLowerCase().includes(searchText)
      );

      setFiltered(filteredProducts);
    }
  }

  return (
    <Page>
      <Header />
      <Main>
        <h1>Seja bem vindo!</h1>

        <SearchGroup>
          <input type="text" placeholder="O que você procura?"
            value={search}
            onChange={e => { setSearch(e.target.value); handleSearch(e.target.value) }}
          />

          <SearchButton onClick={() => { handleSearch() }}>
            <FaSearch />
          </SearchButton>

        </SearchGroup>

        <Categories setFilterCat={setFilterCat} filterCat={filterCat} />

        <Products setShowConfirm={setShowConfirm} setSelected={setSelected} products={filtered ? filtered : products} cart={cart} />

        <ButtonHolder>
          <Cancel onClick={() => { setCart([]) }}>Cancelar</Cancel>
          <Finish disabled={cart.length < 1 ? true : false} onClick={() => {
            postOrders(cart, props.setOrdered);
            navigate("/payment")
          }
          }>
            Finalizar pedido
          </Finish>
        </ButtonHolder>

        {
          showConfirm && selected && <ConfirmItem setShowConfirm={setShowConfirm} product={selected} setCart={setCart} cart={cart} />
        }

        {cart && <CheckOut cart={cart} />}

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
  @media (max-width: 700px) {
        width: 95%;
  }
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
  border: none;
  width: 300px;
  padding: 20px;
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
        width: 40%;
        padding: 5px;
  }
`;

const Cancel = styled.button`
  width: 300px;
  padding: 20px;
  border: 2px solid gray;
  color: gray;
  border-radius: 12px;
  cursor: pointer;
  &:hover{
    color: white;
    background-color: gray;
  }
  @media (max-width: 700px) {
        width: 40%;
        padding: 5px;
  }
`

