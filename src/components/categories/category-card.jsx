import styled from "styled-components";

export default function CategoryCard(props) {

    return (
        <Main>
            <Ilustration src="https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fburger_carne_incri%CC%81vel.png&w=1920&q=75" alt="Hamburg" />
            <h2>Combos</h2>
        </Main>
    )
}



const Main = styled.button`
    width: 250px;
    height: 200px;

    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    border: none;
    background-color: white;
    border-radius: 12px;
    box-shadow: 2px 2px 6px 2px #1b8a1b50;
    cursor: pointer;
    transition: transform 300ms ease-out;
    &:hover{
        transform: translate(0px, 0px) scale(1.1, 1.1);
    };
`;

const Ilustration = styled.img`
    height: 70%;
    width: 85%;
`;