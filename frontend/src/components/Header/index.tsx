import React from "react";
import styled from "styled-components";

import { Conteiner } from "src/assets/styles/globals";

const Header = () => {
  return (
    <WrapperStyled>
      <Conteiner>
        <BoxStyled>
          <LogoStyled>Auto Spares Hub</LogoStyled>
        </BoxStyled>
      </Conteiner>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid #cdd2dd;
  backdrop-filter: blur(8px);
  padding: 24px 0;

  @media ${({ theme }) => theme.media.mobile} {
    border-bottom: none;
    padding: 15px 0;
    backdrop-filter: none;
    background: inherit;
  }
`;

const BoxStyled = styled.div`
  position: relative;
  text-align: end;
  @media ${({ theme }) => theme.media.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`;

const LogoStyled = styled.p`
  font-weight: 500;
  font-size: x-large;
`;

const LogoStyled2 = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  @media ${({ theme }) => theme.media.desktop} {
    position: static;
    width: 120px;
    height: 20px;
    margin-right: 0;
    transform: none;
  }
  @media ${({ theme }) => theme.media.tablet} {
    position: static;
    width: 100px;
    height: 16px;
    margin-right: 0;
    transform: none;
  }
`;

export default Header;
