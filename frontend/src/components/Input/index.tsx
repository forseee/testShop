import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  if (props.type === "submit") {
    return <SubmitInputStyled {...props}></SubmitInputStyled>;
  }

  return (
    <>
      {label && <StyledLabel htmlFor={`${label}-field`}>{label}</StyledLabel>}
      <StyleInput id={label ? `${label}-field` : `${props.type}`} {...props} />
    </>
  );
};

const SubmitInputStyled = styled.input`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  transition: 0.3s border-color;
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
  }
`;

const StyledLabel = styled.label`
  margin-left: 0.5rem;
`;

const StyleInput = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #eee;
  transition: 0.3s border-color;
  &:hover {
    border: 1px solid #aaa;
  }
`;

export default Input;
