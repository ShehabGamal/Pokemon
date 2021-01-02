import React from "react";
import styled from "styled-components";
const StyledInput = styled.input`
  background: transparent;
  border: 0;
  width: 100%;
  display: block;
  height: 2.37895vh;
  color: ${(props) => props.theme.secondaryColor};
  font-weight: lighter;
  letter-spacing: 0.1982vh;
  margin-bottom: 2.973vh;
  margin-right: 1.982vh;
  outline: none;
`;
const StyledButton = styled.button`
border:0;
padding: 0.7928vh 1.9821vh;
margin:0 0.1982vh;
border-radius:0.1982vh;
font-weight:lighter;
letter-spacing: 0.0991vh;
font-size:1.4866vh;
cursor:pointer;
background:${(props) => props.theme.mainColor};
color:${(props) => props.theme.secondaryColor};;
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
