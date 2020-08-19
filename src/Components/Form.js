import React from "react";
import styled from "styled-components";
const StyledInput = styled.input`
  background: transparent;
  border: 0;
  width: 100%;
  display: block;
  color: white;
  font-weight: lighter;
  letter-spacing: 2px;
  margin-bottom: 30px;
  margin-right: 20px;
  outline: none;
`;
const StyledButton = styled.button`
border:0;
padding: 8px 20px;
margin:0px 2px;
border-radius:2px;
font-weight:lighter;
letter-spacing: 1px;
font-size:15px;
cursor:pointer;
background:red;
color:white;
font-weight:100;
&;active{
  outline:none;
}

`;
const Form = (props) => {
  return (
    <form onSubmit={props.fetchData}>
      <StyledInput
        type="text"
        name="PokemonName"
        placeholder="Enter Pokemon Name"
      />
      <StyledButton>Get Pokemon</StyledButton>
    </form>
  );
};

export default Form;
