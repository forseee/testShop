import { ShoppingCartType } from "src/widgets/ShoppingCart";

export const addToCartNewItem = (
  id: number,
  name: string,
  callback: (data: ShoppingCartType) => void,
  shoppingCart: ShoppingCartType
) => {
  if (shoppingCart) {
    const findEl = shoppingCart.data.find((item) => item.id === id);
    if (findEl) {
      const newEl = { ...findEl, value: findEl.value + 1 };
      const newDate = [...shoppingCart.data];
      newDate[shoppingCart.data.findIndex((item) => item.id === id)] = newEl;
      callback({ ...shoppingCart, data: newDate });
    } else {
      const newEl = { id, name, value: 1 };
      callback({
        ...shoppingCart,
        data: [...shoppingCart.data, newEl],
      });
    }
  } else {
    const newEl = { id, name, value: 1 };
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 2);
    callback({ time: currentDate, data: [newEl] });
  }
};
