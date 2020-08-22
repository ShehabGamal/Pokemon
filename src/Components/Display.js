import React from "react";
import styled from "styled-components";

const Info = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 2px;
  color: ${(props) => props.theme.secondaryColor};
`;
const Holder = styled.div`
  display: block;
  margin: 10px 10px 10px 10px;
`;
const Fix = styled.span`
  display: inline;
  color: ${(props) => props.theme.secondaryColor};
  padding: 10px;
  margin: 10px 10px 10px 10px;
`;
const Presentation = styled.span`
  display: block;
  color: ${(props) => props.theme.secondaryColor};
  padding: 10px;
  font-size: 20px;
  margin: 10px 10px 10px 10px;
`;
const Image = styled.img`
  display: block;
  padding: 10px;
  margin: 10px 10px 10px 10px;
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
