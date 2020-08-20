import React from "react";
import styled from "styled-components";

const Info = styled.div`
  width: 100%;
  font-size: ${(props) => props.theme.fontSize};
  font-weight: 200;
  letter-spacing: ${(props) => props.theme.letterSpacing};
  color: ${(props) => props.theme.secondaryColor};
`;
const Holder = styled.div`
  display: ${(props) => props.theme.mainDisplay};
  margin: ${(props) => props.theme.margin};
`;
const Fix = styled.span`
  display: ${(props) => props.theme.secondaryDisplay};
  color: ${(props) => props.theme.secondaryColor};
  padding: ${(props) => props.theme.padding};
  margin: ${(props) => props.theme.margin};
`;
const Presentation = styled.span`
  display: ${(props) => props.theme.mainDisplay};
  color: ${(props) => props.theme.secondaryColor};
  padding: ${(props) => props.theme.padding};
  font-size: ${(props) => props.theme.fontSize};
  margin: ${(props) => props.theme.margin};
`;
const Image = styled.img`
  display: ${(props) => props.theme.mainDisplay};
  padding: ${(props) => props.theme.padding};
  margin: ${(props) => props.theme.margin};
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
            ability: {props.info.abilities[0].ability.name}
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
