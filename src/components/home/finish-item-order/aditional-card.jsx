import styled from "styled-components"
import CheckBox from "../checkbox"

export default function AdditionalCard(props) {
    return (
        <Main>
            <LeftContainer>
                <img src={props.extra.image} alt="Imagem" />
                <NameHolder>
                    <h5>{props.extra.name}</h5>
                    <h6>{props.extra.description}</h6>
                </NameHolder>
            </LeftContainer>
            <RightContainer>
                R$ {(props.extra.price/100).toFixed(2)}
                <CheckBox additionalId={props.extra.id} handleCheckboxChange={props.handleCheckboxChange} />
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
        width: 100px;
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

