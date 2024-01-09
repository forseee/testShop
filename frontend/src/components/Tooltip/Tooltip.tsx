import React, { ReactNode, useState } from "react";
import styled from "styled-components";

type Props = {
  info: ReactNode;
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const Tooltip = ({
  onMouseEnter,
  onMouseLeave,
  info,
  children,
}: Props) => {
  const [toltip, setToltip] = useState(false);

  const handleMouseEnter = () => {
    setToltip(true);
    onMouseEnter && onMouseEnter();
  };
  const handleMouseLeave = () => {
    setToltip(false);
    onMouseLeave && onMouseLeave();
  };

  return (
    <WrapperStyled
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <PopoverStyled visibl={toltip}>{info}</PopoverStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  position: relative;
`;

const PopoverStyled = styled.div<{ visibl: boolean }>`
  position: absolute;
  display: inline-block;
  visibility: ${(props) => {
    if (props.visibl) {
      return "visible";
    }
    return "hidden";
  }};
  opacity: ${(props) => {
    if (props.visibl) {
      return 1;
    }
    return 0;
  }};
  transition: all 1s;
  top: 35px;
  margin-left: -50%;
  transform: translate(-50%);
  white-space: nowrap;
  text-align: center;
  background: #ffffff;
  border-radius: 16px;
  padding: 8px 16px;
`;
