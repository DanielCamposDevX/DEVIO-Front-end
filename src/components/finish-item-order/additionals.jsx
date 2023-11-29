import styled from "styled-components"
import AdditionalCard from "./aditional-card"


export default function Additionals() {
    return (
        <Main>
            <h2>Adicionais</h2>
            <h4>Selecione os ingredientes que você quer adicionar a mais no seu lanche</h4>

            <AdditionalsHolder>
                <AdditionalCard />
                <AdditionalCard />
                <AdditionalCard />
                <AdditionalCard />
                <AdditionalCard />
            </AdditionalsHolder>

        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`

const AdditionalsHolder = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
`