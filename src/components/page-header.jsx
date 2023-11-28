import styled from "styled-components"
import { PiHamburgerDuotone } from "react-icons/pi";


export default function Header() {
    return (
        <Main>
            <Brand>
                <PiHamburgerDuotone className="burger-icon" />
                fastfood
            </Brand>
            <ButtonsContainer>
                <OptionsButton>Pedidos</OptionsButton>
                <OptionsButton>Cozinha</OptionsButton>
                <OptionsButton>Retirada</OptionsButton>
            </ButtonsContainer>
        </Main>
    )
}


const Main = styled.header`
    font-family: 'Montserrat', sans-serif;
    height: 8vh;
    width: 100%;
    background-color: green;
    box-sizing: border-box;
    padding-left: 40px;
    padding-right: 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Brand = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    font-weight: 800;
    color: white;
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const OptionsButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 800;
    border: none;
    background-color: darkgreen;
    color: white;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 10px;
`