import styled from "styled-components";

export default function SimpleProductCard(props) {

    return (
        <Card>
            <Container>
                <ProductImage src="https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75" />
            </Container>
        </Card>
    )
}



const Card = styled.div`
  width: 250px;
  height: 200px;
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
`;


const ProductImage = styled.img`
    position: absolute;
    top: -60px;
    width: 70%;
    z-index: 1000;
`;

const Container = styled.div`
    position: relative;
    background-color: white;
    border-radius: 12px;
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
