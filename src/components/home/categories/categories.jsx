import styled from "styled-components"
import CategoryCard from "./category-card"
import { useEffect, useState } from "react";
import { getCategories } from "../../../services/get-categories";
import { FaXmark } from "react-icons/fa6";
import Loading from "../loading";



export default function Categories(props) {

    const [categories, setCategories] = useState();

    useEffect(() => {
        getCategories(setCategories)
    }, [])

    function handleFilter(id) {
        props.setFilterCat(id)
    }

    return (
        <Main>
            <h2>
                Categorias
                {props.filterCat && (
                    <Return onClick={()=>{props.setFilterCat(null)}}>
                        <FaXmark />
                    </Return>
                )}
            </h2>
            <h3>Navegue por categoria</h3>
            <CategoryHolder>
                {categories ? (categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        handleFilter={handleFilter}
                        id={category.id}
                        image={category.image}
                        name={category.name}
                    />
                ))):
                (<Loading />)
                }

            </CategoryHolder>

        </Main>
    )
}


const Main = styled.div`
    margin-top: 50px;
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const CategoryHolder = styled.div`
    display: flex;
    gap: 50px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    margin-top: 30px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        height: 4px; 
    };
    
    &::-webkit-scrollbar-thumb {
        background-color: #ccc; 
        border-radius: 3px;
    };

    &::-webkit-scrollbar-track {
        background-color: transparent;
    };
`;

const Return = styled.button`
    margin-left: 10px;
    border: none;
    background-color: lightgreen;
    font-size: 16px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
`
