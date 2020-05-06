import React from "react";

import { FiPlus, FiMinus } from "react-icons/fi";

import {
  Container,
  ProductInformation,
  ImageArea,
  ImageProduct,
  ProductDetail,
  ProductName,
  ProductSize,
  ProductQuantity,
  ButtonQuantity,
  Quantity,
  ProductPrice,
  ActualPrice,
  Payment,
  ButtonRemoveItem,
} from "./styles";

import no_image from "../../assets/no_image.png";

function CartProduct({
  name,
  actual_price,
  installments,
  image,
  selectedSize,
  sizes,
  quantity,
  RemoveOneProduct,
}) {
  const handleRemoveProduct = () => {
    RemoveOneProduct();
  };

  return (
    <Container>
      <ProductInformation>
        <ImageArea>
          <ImageProduct src={image !== "" ? image : no_image} alt={name} />
        </ImageArea>
        <ProductDetail>
          <ProductName>{name}</ProductName>
          <ProductSize>
            Tam:
            {sizes
              .filter((size) => selectedSize === size.sku)
              .map((size) => size.size)}
          </ProductSize>
          <ProductQuantity>
            <ButtonQuantity onClick={handleRemoveProduct}>
              <FiMinus size={15} />
            </ButtonQuantity>
            <Quantity>{quantity}</Quantity>
            <ButtonQuantity>
              <FiPlus size={15} />
            </ButtonQuantity>
          </ProductQuantity>
        </ProductDetail>
        <ProductPrice>
          <ActualPrice>{actual_price}</ActualPrice>
          <Payment>{installments}</Payment>
        </ProductPrice>
      </ProductInformation>
      <ButtonRemoveItem>Remover Item</ButtonRemoveItem>
    </Container>
  );
}

export default CartProduct;
