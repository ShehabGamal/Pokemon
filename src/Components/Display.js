import React from "react";
import styled from "styled-components";

const Info = styled.div`
  width: 100%;
  font-size: 2.97vh;
  font-weight: 200;
  letter-spacing: 0.1982vh;
  color: ${(props) => props.theme.secondaryColor};
`;
const Holder = styled.div`
  display: block;
  margin: 0.99vh 0.99vh0.99vh 0.99vh;
`;
const Fix = styled.span`
  display: inline;
  color: ${(props) => props.theme.secondaryColor};
  padding: 0.99vh;
  margin: 0.99vh 0.99vh 0.99vh 0.99vh;
`;
const Presentation = styled.span`
  display: block;
  color: ${(props) => props.theme.secondaryColor};
  padding: 0.99vh;
  font-size: 2.97vh;
  margin: 0.99vh 0.99vh 0.99vh 0.99vh;
`;
const Image = styled.img`
  display: block;
  padding: 0.99vh;
  margin: 0.99vh 0.99vh 0.99vh 0.99vh;
`;
const Display = (props) => {
  console.log(props.info);
  return (
    <Info>
      {props.info && props.info.sprites && props.info.sprites.front_default && (
        <Image src={props.info.sprites.front_default} alt="" />
      )}
      <Holder>
        {props.info.types &&
          props.info.types.map((object) => <Fix>{object.type.name} </Fix>)}
      </Holder>

      {props.info.name && <Presentation>Name: {props.info.name}</Presentation>}

      {props.info.abilities &&
        props.info.abilities[0] &&
        props.info.abilities[0].ability &&
        props.info.abilities[0].ability.name && (
          <Presentation>
            Ability: {props.info.abilities[0].ability.name}
          </Presentation>
        )}
      {props.info.height && (
        <Presentation>Height: {props.info.height}</Presentation>
      )}
      {props.info.weight && (
        <Presentation>Weight: {props.info.weight}</Presentation>
      )}
    </Info>
  );
};

export default Display;
