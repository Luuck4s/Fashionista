import React from "react";

import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

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
  AddProduct,
  RemoveProduct,
}) {
  const handleRemoveOneProduct = () => {
    RemoveOneProduct();
  };

  const handleRemoveProduct = () => {
    RemoveProduct();
  };

  const handleAddProduct = () => {
    AddProduct();
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
            <ButtonQuantity onClick={handleRemoveOneProduct}>
              <FiMinus size={17} />
            </ButtonQuantity>
            <Quantity>{quantity}</Quantity>
            <ButtonQuantity>
              <FiPlus size={17} onClick={handleAddProduct} />
            </ButtonQuantity>
          </ProductQuantity>
        </ProductDetail>
        <ProductPrice>
          <ActualPrice>{actual_price}</ActualPrice>
          <Payment>{installments}</Payment>
          <ButtonRemoveItem onClick={handleRemoveProduct}>
            <FiTrash2 size={20} color={"#AA3333"} />
          </ButtonRemoveItem>
        </ProductPrice>
      </ProductInformation>
    </Container>
  );
}

export default CartProduct;
