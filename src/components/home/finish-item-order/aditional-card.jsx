import styled from "styled-components"
import CheckBox from "../checkbox"

export default function AdditionalCard() {
    return (
        <Main>
            <LeftContainer>
                <img src="https://media.gazetadopovo.com.br/2023/03/03100530/bigstock-Turkey-Bacon-Cooked-On-A-White-469746969-960x540.jpg" alt="Imagem" />
                <NameHolder>
                    <h5>Bacon</h5>
                    <h6>10g</h6>
                </NameHolder>
            </LeftContainer>
            <RightContainer>
                R$ 1,00
                <CheckBox />
            </RightContainer>
        </Main>
    )
}



const Main = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    img{
        height: 70px;
        border-radius: 12px;
        box-shadow: 2px 2px 6px 3px #1b8a1b34;
        border: 1px solid rgba(0,0,0,0.3);
    }
`

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`


const NameHolder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    h5{
        font-weight: 600
    }
    h6{
        font-size: 14px;
    }
`

