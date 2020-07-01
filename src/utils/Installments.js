export const installments = (regularPrice) => {
  const [, price] = regularPrice.split(" ");

  const installments = Math.floor(Number(price) / 3);

  return `3x R$ ${installments.toFixed(2)}`
};