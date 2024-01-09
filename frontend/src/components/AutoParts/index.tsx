import React from "react";
import styled from "styled-components";

import { AutoPartsType } from "src/pages/Main";

import Input from "../Input";
import { AutoPartsList } from "../AutoPartsList";

type AutoPartsProps = {
  data: Array<AutoPartsType>;
  isLoading: boolean;
  isError: boolean;
  filterValue: string;
  searchOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  deleteAutoPart: (id: number) => void;
  addToCart: (id: number, name: string) => void;
};

const AutoParts: React.FC<AutoPartsProps> = ({
  data,
  isLoading,
  isError,
  filterValue,
  searchOnChange,
  deleteAutoPart,
  addToCart,
}) => {
  return (
    <Box>
      <Input
        label="Search by name of part"
        value={filterValue}
        onChange={searchOnChange}
      />
      <StyledText>Auto parts list:</StyledText>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data && (
        <AutoPartsList
          parts={data}
          delitePart={deleteAutoPart}
          addToCart={addToCart}
        />
      )}
    </Box>
  );
};

const StyledText = styled.h3`
  margin-left: 1rem;
`;

const Box = styled.div`
  flex-grow: 1;
  width: 100%;
`;

export default AutoParts;
