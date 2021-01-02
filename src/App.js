import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form.js";
import Display from "./Components/Display.js";
import styled from "styled-components";

const Wrapper = styled.div`
  background: ${(props) => props.theme.fixedColor};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
  background: ${(props) => props.theme.mainColor};
  height: 70vh;
  padding-top: 9.9vh;
  padding-left: 4.95vh;
  padding-right: 4.95vh;
  margin: auto;
`;

const StyledHeader = styled.h1`
  color: ${(props) => props.theme.secondaryColor};
  font-size: 3vh;
`;

function App() {
  const [info, setInfo] = useState({});

  const fetchData = async (e) => {
    e.preventDefault();
    const Pokemon = e.target.elements.PokemonName.value;
    const API_KEY = `https://pokeapi.co/api/v2/pokemon/${Pokemon}`;
    const Response = await fetch(API_KEY);
    const data = await Response.json();
    setInfo(data);
  };
  return (
    <Wrapper>
      <FormContainer>
        <div className="App">
          <StyledHeader> Pick Your Pokemon </StyledHeader>
          <Form fetchData={fetchData} />
          <Display info={info} />
        </div>
      </FormContainer>
    </Wrapper>
  );
}

export default App;
