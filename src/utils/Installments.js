export const installments = (regularPrice) => {
  let [, price] = regularPrice.split(" ");

  price = price.replace(",", ".");

  const installments = Math.floor(Number(price) / 3);

  return `3x R$ ${installments.toFixed(2)}`
};