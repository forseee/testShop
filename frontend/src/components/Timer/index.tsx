import React from "react";
import styled from "styled-components";

interface TimerProps {
  minutes: number;
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({ minutes, seconds }) => {
  return (
    <BoxStyled>
      <TextStyled>
        {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
      </TextStyled>
    </BoxStyled>
  );
};

const BoxStyled = styled.div`
  min-width: 40px;
  text-align: center;
  border: solid 1px red;
  border-radius: 5px;
  padding: 3px;
`;

const TextStyled = styled.p`
  color: red;
`;

export default Timer;
