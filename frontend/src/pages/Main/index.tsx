import React, { useEffect, useLayoutEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import styled from "styled-components";

import { Conteiner } from "src/assets/styles/globals";
import FormForCreatingAutoPart from "src/components/FormForCreatingAutoPart";
import AutoParts from "src/components/AutoParts";
import { deleteAutoPart, getAutoParts, postAutoPart } from "src/shared/api";
import { useDebounce } from "src/shared/hooks/useDebounce";
import ShoppingCart from "src/components/ShoppingCart";

export type AutoPartsType = {
  id: number;
  name: string;
  img: string;
  price: number;
  createdAt: Date;
};

type ShoppingCart = {
  time: Date;
  data: Array<{ id: number; name: string; value: number }>;
};

const Main = () => {
  const queryClient = useQueryClient();
  const [filterValue, setFilterValue] = useState("");
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>(null);
  const debouncedVal = useDebounce(filterValue);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.currentTarget.value);
  };

  // Проверка даты
  useEffect(() => {
    if (
      shoppingCart &&
      new Date(shoppingCart.time).getTime() < new Date().getTime()
    ) {
      setShoppingCart(null);
      localStorage.removeItem("shoppingCart");
    } else {
    }
  }, [shoppingCart]);

  // Таймер
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (shoppingCart && shoppingCart.time) {
      intervalId = setInterval(() => {
        console.log("date", new Date());
        if (new Date(shoppingCart.time).getTime() <= new Date().getTime()) {
          setShoppingCart(null);
          localStorage.removeItem("shoppingCart");
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [shoppingCart]);

  // Добавляем в корзину
  const addToCart = (id: number, name: string) => {
    if (shoppingCart) {
      const findEl = shoppingCart.data.find((item) => item.id === id);
      if (findEl) {
        const newEl = { ...findEl, value: findEl.value + 1 };
        const newDate = [...shoppingCart.data];
        newDate[shoppingCart.data.findIndex((item) => item.id === id)] = newEl;
        setShoppingCart({ ...shoppingCart, data: newDate });
      } else {
        const newEl = { id, name, value: 1 };
        setShoppingCart({
          ...shoppingCart,
          data: [...shoppingCart.data, newEl],
        });
      }
    } else {
      const newEl = { id, name, value: 1 };
      const currentDate = new Date();
      currentDate.setMinutes(currentDate.getMinutes() + 2);
      setShoppingCart({ time: currentDate, data: [newEl] });
    }
  };

  // Добавляем изменения корзины в lockalStorage
  useEffect(() => {
    if (shoppingCart) {
      localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    }
  }, [shoppingCart]);

  // При загрузки страницы проверяем lockalStorage
  useLayoutEffect(() => {
    const shoppingCartStorage = JSON.parse(
      localStorage.getItem("shoppingCart")
    );

    if (shoppingCartStorage) {
      setShoppingCart(shoppingCartStorage);
    }
  }, []);

  // Получение автозапчастей
  const {
    data: autoPartsData,
    isLoading,
    isError,
  } = useQuery<Array<AutoPartsType>>(
    ["autoParts", debouncedVal],
    () => getAutoParts({ search: debouncedVal }),
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  // Удаление автозапчастей
  const { mutate: mutateDeleteAutoPart } = useMutation({
    mutationFn: deleteAutoPart,
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["autoParts", debouncedVal],
        (oldData: Array<AutoPartsType>) => {
          return oldData.filter((item) => item.id !== data.id);
        }
      );
    },
  });

  // Создание новой автозапчасти
  const { mutate: mutateCreateAutoPart } = useMutation({
    mutationFn: postAutoPart,
    onSuccess: (data) => {
      queryClient.setQueryData(
        ["autoParts", debouncedVal],
        (oldData: Array<AutoPartsType>) => {
          return [...oldData, data];
        }
      );
    },
  });

  return (
    <Wrapper>
      <Conteiner>
        <Flex>
          <AutoParts
            data={autoPartsData}
            isLoading={isLoading}
            isError={isError}
            filterValue={filterValue}
            searchOnChange={handleOnChange}
            deleteAutoPart={mutateDeleteAutoPart}
            addToCart={addToCart}
          />
          <BoxForFormAndCartStyled>
            <FormForCreatingAutoPart createAutoPart={mutateCreateAutoPart} />
            <ShoppingCart
              shoppingCartItems={shoppingCart ? shoppingCart.data : null}
            />
          </BoxForFormAndCartStyled>
        </Flex>
      </Conteiner>
    </Wrapper>
  );
};

const Flex = styled.div`
  margin: 50px 0;
  display: flex;
  align-items: flex-start;
  gap: 40px;
  @media ${({ theme }) => theme.media.desktop} {
    flex-direction: column;
  }
`;

const BoxForFormAndCartStyled = styled.div`
  @media ${({ theme }) => theme.media.desktop} {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  flex: 1 0 auto;
`;

export default Main;
