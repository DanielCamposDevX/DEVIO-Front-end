import styled from "styled-components";

export default function ProductCard(props) {


    return (
        <Card onClick={() => { 
            props.setShowConfirm(true);
            props.setSelected(props.product)
            }}>
            <Container>
                <ProductImage src={props.product.picture} />
                <h2>{props.product.name}</h2>
                <h4>{props.product.subtitle}</h4>
                <Price>R$ {(props.product.price/100).toFixed(2)}</Price>
            </Container>
        </Card>
    )
}



const Card = styled.div`
  width: 250px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  border-radius: 20px;
  background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/hd/12858a32751817.56929eefe8431.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: clip;
  border: 1px solid darkgreen;
  box-shadow: 2px 2px 6px 2px #1b8a1b34;
    cursor: pointer;
    transition: transform 300ms ease-out;
    &:hover{
        transform: translate(0px, 0px) scale(1.02, 1.02);
    };
`;


const ProductImage = styled.img`
    position: absolute;
    top: -60px;
    height: 45%;
    z-index: 10;
`;

const Container = styled.div`
    position: relative;
    background-color: white;
    border-radius: 12px;
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    h2{
        text-align: center;
    }
`

const Price = styled.h2`
    position: absolute;
    bottom: 20px;
    left: center;
`
