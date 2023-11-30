import styled from "styled-components"
import { FaMoneyBill } from "react-icons/fa";


export default function PaymentMethod(props) {





    return (
        <Method selected={props.selected && props.selected.id === props.method.id}>
            <CustomIcon />
            <h2>{props.method.name}</h2>
            <CheckboxWrapper>
                <div className="round">
                    <input type="checkbox" id={`checkbox-${props.method.id}`} onChange={() => props.setMethod(props.method)} checked={props.selected ? props.selected.id === props.method.id : false} />
                    <label htmlFor={`checkbox-${props.method.id}`}></label>
                </div>
            </CheckboxWrapper>
        </Method>
    )
}

const Method = styled.button`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    border: ${(props) => (props.selected ? "2px solid #07880e" : "1px solid #ccc")};
`

const CheckboxWrapper = styled.div`
  .round {
    position: relative;
  }

  .round label {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    width: 20px;
    display: block;
  }

  .round label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 5px;
    left: 5px;
    opacity: 0;
    position: absolute;
    top: 6px;
    transform: rotate(-45deg);
    width: 10px;
  }

  .round input[type="checkbox"] {
    visibility: hidden;
    display: none;
    opacity: 0;
  }

  .round input[type="checkbox"]:checked + label {
    background-color: #07880e;
    border-color: #07880e;
  }

  .round input[type="checkbox"]:checked + label:after {
    opacity: 1;
  }
`;

const CustomIcon = styled(FaMoneyBill)`
    font-size: 30px;
    color: green;
`