export const addToCartInLockalStorage = (id: number, name: string) => {
  const shoppingCart: Array<{
    id: number;
    name: string;
    value: number;
  }> | null = JSON.parse(localStorage.getItem("shoppingCart"));

  const findElInShoppingCart =
    shoppingCart && shoppingCart.find((item) => item.id === id);

  if (findElInShoppingCart) {
    const updateEl = {
      ...findElInShoppingCart,
      value: findElInShoppingCart.value + 1,
    };
    shoppingCart[
      shoppingCart.findIndex((item) => item.id === findElInShoppingCart.id)
    ] = updateEl;
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  } else {
    const newEl = {
      id,
      name,
      value: 1,
    };

    let newShoppingCart = [] as typeof shoppingCart;
    if (shoppingCart) {
      newShoppingCart = [...shoppingCart, newEl];
    } else {
      const currentTime = {
        date: new Date(),
      };
      localStorage.setItem("shoppingCartTime", JSON.stringify(currentTime));
      newShoppingCart = [newEl];
    }

    localStorage.setItem("shoppingCart", JSON.stringify(newShoppingCart));
  }
};
