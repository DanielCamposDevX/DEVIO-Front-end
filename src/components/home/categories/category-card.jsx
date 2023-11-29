import styled from "styled-components";

export default function CategoryCard(props) {

    return (
        <Main>
            <Ilustration src={props.image} alt="Hamburg" />
            <h2>{props.name}</h2>
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

    border: 1px solid darkgreen;
    background-color: white;
    border-radius: 12px;
    box-shadow: 2px 2px 6px 2px #1b8a1b2f;
    cursor: pointer;
    transition: transform 300ms ease-out;
    &:hover{
        transform: translate(0px, 0px) scale(1.05, 1.05);
    };
`;

const Ilustration = styled.img`
    height: 70%;
`;