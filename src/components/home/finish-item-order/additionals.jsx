import styled from "styled-components"
import AdditionalCard from "./aditional-card"
import { useEffect, useState } from "react"
import { getAdditionals } from "../../../services/get-additionals";


export default function Additionals(props) {

    const [additionals, setAdditionals] = useState();

    useEffect(() => {
        getAdditionals(setAdditionals);
    }, [])



    return (
        <Main>
            <h2>Adicionais</h2>
            <h4>Selecione os ingredientes que você quer adicionar a mais no seu lanche</h4>

            <AdditionalsHolder>
                {additionals && (
                    additionals.map((extra) => (
                        <AdditionalCard key={extra.id} extra={extra}  handleCheckboxChange={props.handleCheckboxChange} />
                    ))
                )}

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