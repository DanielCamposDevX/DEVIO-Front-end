import styled from "styled-components"
import ProductCard from "./product-card";


export default function Products(props) {



    return (
        <Main>
            <h2>Produtos</h2>
            <h3>Selecione um produto para adicionar ao seu pedido</h3>
            <ProductHolder>
                {
                    Array.from({ length: 10 }).map((_, i) => (
                        <ProductCard key={i} setShowConfirm={props.setShowConfirm} />
                    ))
                }

            </ProductHolder>
        </Main>
    )
}


const Main = styled.div`
    margin-top: 50px;
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ProductHolder = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    justify-content: center;
    gap: 40px;
    display: flex;
    flex-wrap: wrap;
`;