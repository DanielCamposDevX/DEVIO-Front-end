import styled from "styled-components";

export default function ProductCard(props) {

    return (
        <Card onClick={() => { props.setShowConfirm(true) }}>
            <Container>
                <ProductImage src="https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75" />
                <h2>Burguer</h2>
                <h4>Super Combo</h4>
                <Price>R$ 30,50</Price>
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
    width: 70%;
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
`

const Price = styled.h2`
    position: absolute;
    bottom: 20px;
    left: center;
`
