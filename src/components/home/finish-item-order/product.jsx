import styled from "styled-components"
import SimpleProductCard from "../produtos/min-product-card"
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";


export default function ProductInfos(props) {

    return (
        <ProductContainer>
            <SimpleProductCard image={props.product.picture}/>
            <ProductInfo>
                <h2>{props.product.name}</h2>
                <h4>{props.product.description}</h4>

                <QuantitySelector>
                    <StyledButton onClick={() => { props.setCount(props.count > 0 ? props.count - 1 : props.count) }}>
                        <LuMinus size="30px" />
                    </StyledButton>
                    {props.count}
                    <StyledButton>
                        <GoPlus size="30px" onClick={() => { props.setCount(props.count + 1) }} />
                    </StyledButton>
                </QuantitySelector>
            </ProductInfo>
            <Price>
                <h2>{(props.product.price/100).toFixed(2)}</h2>
            </Price>
        </ProductContainer>
    )
}


const ProductContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 40px;
    
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 30%;
`

const QuantitySelector = styled.div`
    display: flex;
    align-items: center;
    border-radius: 50px;
    gap: 20px;
    border: 1px solid darkgreen;
`

const StyledButton = styled.button`
    height: 30px;
    width: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1000px;
    border: none;
    color: white;
    background-color: darkgreen;
    padding: none;
    overflow: clip;
    cursor: pointer;
`
const Price = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;
`