import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";

import useTimer from "src/shared/hooks/useTimer";

import Timer from "../../components/Timer";
import { Tooltip } from "../../components/Tooltip";

export interface ShoppingCartType {
  time: Date;
  data: Array<{ id: number; name: string; value: number }>;
}

type ShoppingCartProps = {
  shoppingCart: ShoppingCartType;
  setShoppingCart: (card: ShoppingCartType) => void;
};

const ShoppingCart: React.FC<ShoppingCartProps> = React.memo(({
  shoppingCart,
  setShoppingCart,
}) => {
  const timer = useTimer(shoppingCart && shoppingCart.time, () => {
    setShoppingCart(null);
    localStorage.removeItem("shoppingCart");
  });

  // При загрузки страницы проверяем lockalStorage
  useLayoutEffect(() => {
    const shoppingCartStorage = JSON.parse(
      localStorage.getItem("shoppingCart")
    );

    if (shoppingCartStorage) {
      setShoppingCart(shoppingCartStorage);
    }
  }, []);

  // Проверка даты
  useEffect(() => {
    if (shoppingCart) {
      if (new Date(shoppingCart.time).getTime() < new Date().getTime()) {
        setShoppingCart(null);
        localStorage.removeItem("shoppingCart");
      } else {
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
      }
    }
  }, [shoppingCart]);

  return (
    <ShoppingCartBox>
      <Flex>
        <p>Shopping cart</p>
        <Tooltip info={<p>Timer to clear cart</p>}>
          <Timer minutes={timer.minutes} seconds={timer.seconds} />
        </Tooltip>
      </Flex>
      <ShoppingCartItems>
        {shoppingCart &&
          shoppingCart.data.map((item) => (
            <ShoppingCartItem key={item.id}>
              <p>{item.name}</p>
              <p>{item.value}</p>
            </ShoppingCartItem>
          ))}
      </ShoppingCartItems>
    </ShoppingCartBox>
  );
});

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ShoppingCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
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
