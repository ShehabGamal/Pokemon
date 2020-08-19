import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form.js";
import Display from "./Components/Display.js";
import styled from "styled-components";

const Wrapper = styled.div`
  background: red;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
  background: black;
  height: 70vh;
  padding-top: 100px;
  padding-left: 50px;
  padding-right: 50px;
  margin: auto;
`;

const StyledHeader = styled.h1`
  color: white;
  font-size: 30px;
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
