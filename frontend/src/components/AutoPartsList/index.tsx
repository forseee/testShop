import React from "react";
import { AutoPartsType } from "src/pages/Main";
import styled from "styled-components";
import Button from "../Button";

interface AutoPartsListProps {
  parts: Array<AutoPartsType>;
  delitePart: (id: number) => void;
  addToCart: (id: number, name: string) => void;
}

export const AutoPartsList: React.FC<AutoPartsListProps> = ({
  parts,
  delitePart,
  addToCart,
}) => {
  return (
    <ItemsList>
      {parts.map((item) => (
        <Item key={item.id}>
          <StyledImg src={item.img} alt="img"></StyledImg>
          <TextNameStyled>{item.name}</TextNameStyled>
          <TextPriceStyled>{item.price} $</TextPriceStyled>
          <Flex>
            <Button onClick={() => delitePart(item.id)}>Delete</Button>
            <Button onClick={() => addToCart(item.id, item.name)}>
              Add to Cart
            </Button>
          </Flex>
        </Item>
      ))}
    </ItemsList>
  );
};

const TextNameStyled = styled.p`
  min-width: 230px;
  text-align: center;
`;
const TextPriceStyled = styled.p``;

const Flex = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
`;
