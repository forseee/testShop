import React, { FC } from "react";
import styled from "styled-components";

interface Props extends React.PropsWithChildren {
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: 24px;
  box-shadow: 0px 8px 16px rgba(8, 216, 153, 0.2);
  border-radius: 8px;
  padding: 12px 32px;
  color: #ffffff;
  min-width: 100px;
  border: none;
  font-family: "Manrope", sans-serif;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    transition: all 0.2s;
    box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.background.white};
    border-color: ${({ theme }) => theme.colors.background.white};
    color: ${({ theme }) => theme.colors.primary};
    cursor: not-allowed;
  }
  @media ${({ theme }) => theme.media.mobile} {
    padding: 8px 12px;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export default Button;
