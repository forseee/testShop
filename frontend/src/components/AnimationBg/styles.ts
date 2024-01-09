import styled, { keyframes } from "styled-components";

export const Circles = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
  z-index: -1;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Li = styled.li<{
  $bgcolor: string;
  $leftside?: string;
  rotate: number;
  $righside?: string;
  $top?: string;
}>`
  left: ${(props) => {
    if (props.$righside) {
      return "auto";
    }
    return props.$leftside;
  }};
  right: ${(props) => {
    if (props.$leftside) {
      return "auto";
    }
    return props.$righside;
  }};
  top: ${(props) => props.$top};

  position: absolute;
  display: block;
  list-style: none;
  width: 30%;
  height: 40%;
  border-radius: 30%;
  opacity: 0.15;
  filter: blur(100px);
  background: ${(props) => props.$bgcolor};
  transform: rotate(${(props) => props.rotate}deg);
  animation: ${animation} 10s linear infinite;
`;
