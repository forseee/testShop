import axios from "axios";

const $host = axios.create({
  baseURL: `http://localhost:3001/`,
});

export const getAutoParts = async ({ search }: { search: string }) => {
  const { data } = await $host.get("/products", {
    params: { search },
  });
  return data;
};

export const deleteAutoPart = async (id: number) => {
  const { data } = await $host.delete(`/products/${id}`);

  return data;
};

export const postAutoPart = async (params: {
  name: string;
  price: number;
  img: string;
}) => {
  const { data } = await $host.post("/products", params);
  return data;
};
