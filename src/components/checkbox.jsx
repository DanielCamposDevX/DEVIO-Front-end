import styled from "styled-components";



export default function CheckBox() {
  return (
    <CheckboxWrapper>
      <div className="round">
        <input type="checkbox" id="checkbox-18" />
        <label htmlFor="checkbox-18"></label>
      </div>
    </CheckboxWrapper>
  );
}

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