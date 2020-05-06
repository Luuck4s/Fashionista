export const groupProducts = (cartItems = [], product) => {
  const repeatedProduct = cartItems.find(
    (cartItem) => cartItem.selectedSize === product.selectedSize
  );

  if (!repeatedProduct) {
    cartItems.push({ ...product, quantity: 1 });
    return cartItems;
  }

  repeatedProduct.quantity += 1;

  return cartItems;
};
