import React from "react";
import styled from "styled-components";

type ShoppingCartProps = {
  shoppingCartItems: Array<{ id: number; name: string; value: number }>;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({ shoppingCartItems }) => {
  // const shoppingCartItems: Array<{
  //   id: number;
  //   name: string;
  //   value: number;
  // }> | null = JSON.parse(localStorage.getItem("shoppingCart"));

  return (
    <ShoppingCartBox>
      <p>Shopping cart</p>
      <ShoppingCartItems>
        {shoppingCartItems &&
          shoppingCartItems.map((item) => (
            <ShoppingCartItem key={item.id}>
              <p>{item.name}</p>
              <p>{item.value}</p>
            </ShoppingCartItem>
          ))}
      </ShoppingCartItems>
    </ShoppingCartBox>
  );
};

const ShoppingCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
`;

const ShoppingCartItems = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ShoppingCartBox = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
`;

export default ShoppingCart;
