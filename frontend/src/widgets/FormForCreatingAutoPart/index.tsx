import React, { useState } from "react";
import { UseMutateFunction } from "react-query";
import styled from "styled-components";

import Input from "../../components/Input";

type FormForCreatingAutoPartProps = {
  createAutoPart: UseMutateFunction<
    any,
    unknown,
    { name: string; price: number; img: string }
  >;
};

const FormForCreatingAutoPart: React.FC<FormForCreatingAutoPartProps> = ({
  createAutoPart,
}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [img, setImg] = useState("");
  const [errForm, setErrForm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && price && img) {
      createAutoPart({ name, price, img });
      setName("");
      setPrice(0);
      setImg("");
    } else {
      setErrForm("Fill in the form fields");
    }
  };

  return (
    <Box>
      <h3>Form for creating auto parts</h3>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          label="price"
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />
        <Input
          label="Link to Img"
          id="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        {errForm && <ErrorTextStyled>{errForm}</ErrorTextStyled>}
        <Input type="submit" value="Submit" />
      </form>
    </Box>
  );
};

const ErrorTextStyled = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;

const Box = styled.div`
  border: 1px solid gray;
  padding: 0 20px 20px;
  border-radius: 10px;
  min-width: 400px;
`;

export default FormForCreatingAutoPart;
