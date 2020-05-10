import React from "react";
import { v4 as uuidv4 } from "uuid";

import { connect, useDispatch } from "react-redux";
import { removeProductToCart, addProductToCart } from "../../store/actions/cart";

import CartProduct from "../CartProduct";

import { groupProducts } from "../../utils/GroupProducts";

import { IoMdArrowBack } from "react-icons/io";

import {
  Container,
  CartHeader,
  CartContent,
  TitleCart,
  ButtonBack,
} from "./styles";

function Cart({ visible = false, handleHiddenCart, cartItems = [], count }) {
  const dispatch = useDispatch();

  const RemoveOneProduct = (product) => {
    const productToRemove = { ...product };

    const indexProduct = cartItems.findIndex((item) => {
      return (
        item.name === productToRemove.name &&
        item.selectedSize === productToRemove.selectedSize
      );
    });

    const newItemsCart = cartItems.filter(
      (_item, index) => index !== indexProduct
    );

    dispatch(removeProductToCart(newItemsCart));
  };

  const AddProduct = (product) => {
    delete product.quantity;

    dispatch(addProductToCart(product));
  };

  return (
    <Container active={visible}>
      <CartHeader>
        <ButtonBack onClick={handleHiddenCart} className="button-back">
          <IoMdArrowBack size={25} color={"#212529"} />
        </ButtonBack>
        <TitleCart>Sacola ({count})</TitleCart>
      </CartHeader>
      <CartContent>
        {cartItems.reduce(groupProducts, []).map((product) => (
          <CartProduct
            key={uuidv4()}
            RemoveOneProduct={() => RemoveOneProduct(product)}
            AddProduct={() => AddProduct(product)}
            {...product}
          />
        ))}
      </CartContent>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  count: state.cart.count,
});

export default connect(mapStateToProps)(Cart);
