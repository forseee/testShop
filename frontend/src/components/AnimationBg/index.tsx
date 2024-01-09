import React from "react";

import * as Styled from "./styles";

const AnimationBg = () => {
  return (
    <Styled.Circles>
      <Styled.Li $bgcolor="#B2F1DE" $leftside="15%" rotate={-65} $top="10%"></Styled.Li>
      <Styled.Li $bgcolor="#3AC922" $righside="15%" rotate={-135} $top="10%"></Styled.Li>
      <Styled.Li $bgcolor="#3AC922" $leftside="15%" rotate={-65} $top="65%"></Styled.Li>
      <Styled.Li $bgcolor="#B2F1DE" $righside="15%" rotate={-135} $top="65%"></Styled.Li>
    </Styled.Circles>
  );
};

export default AnimationBg;
