import styled from "styled-components"
import { PiHamburgerDuotone } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";


export default function Header() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Main>
            <Brand>
                <PiHamburgerDuotone className="burger-icon" />
                fastfood
            </Brand>
            <ButtonsContainer>
                <OptionsButton onClick={() => { navigate("/"); }} $active={location.pathname === "/"}>
                    Pedidos
                </OptionsButton>
                <OptionsButton onClick={() => { navigate("/kitchen") }} $active={location.pathname === "/kitchen"}>
                    Cozinha
                </OptionsButton>
                <OptionsButton onClick={() => { navigate("/withdraw") }}>
                    Retirada
                </OptionsButton>
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
    @media (max-width: 700px) {
        padding: 5px;
  }
`;

const Brand = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    font-weight: 800;
    color: white;
`;

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const OptionsButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 800;
    border: none;
    background-color: transparent;
    color: white;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
    background-color: ${(props) => (props.$active ? "darkgreen" : "transparent")};
    &:hover {
        background-color: ${(props) => (props.$active ? "darkgreen" : "darkgreen")};
    }
    @media (max-width: 700px) {
        padding: 10px;
        font-size: 10px;
  }
`;

OptionsButton.defaultProps = {
    $active: false,
};