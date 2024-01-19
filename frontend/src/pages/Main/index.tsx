import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import styled from "styled-components";

import { Conteiner } from "src/assets/styles/globals";
import FormForCreatingAutoPart from "src/widgets/FormForCreatingAutoPart";
import AutoParts from "src/widgets/AutoParts";
import { deleteAutoPart, getAutoParts, postAutoPart } from "src/shared/api";
import { useDebounce } from "src/shared/hooks/useDebounce";
import ShoppingCart, { ShoppingCartType } from "src/widgets/ShoppingCart";
import { AutoPartsType } from "src/shared/api/autoParts/types";

const Main = () => {
  const queryClient = useQueryClient();
  const [filterValue, setFilterValue] = useState("");
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartType>(null);
  const debouncedVal = useDebounce(filterValue);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.currentTarget.value);
  };

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
            shoppingCart={shoppingCart}
            isLoading={isLoading}
            isError={isError}
            filterValue={filterValue}
            searchOnChange={handleOnChange}
            deleteAutoPart={mutateDeleteAutoPart}
            setShoppingCart={setShoppingCart}
          />
          <BoxForFormAndCartStyled>
            <FormForCreatingAutoPart createAutoPart={mutateCreateAutoPart} />
            <ShoppingCart
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
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
