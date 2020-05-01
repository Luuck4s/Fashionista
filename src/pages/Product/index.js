import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import { Container, ContainerSize } from "./styles";

import Header from "../../components/Header";
import SingleProduct from "../../components/SingleProduct";

import { format } from "../../utils/FormatLink";

import { setProductCart } from "../../store/actions/cart";

function Product({ products }) {
  const [product, setProduct] = useState({});
  const { name } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const findProduct = () => {
      const productName = format(name, false);

      const [product] = products.filter(
        (product) => product.name === productName
      );

      setProduct(product);
    };

    findProduct();
  }, [name, products]);

  const addProductCart = (sizeProduct) => {
    const productToCart = {
      ...product,
      selectedSize: sizeProduct,
    };

    dispatch(setProductCart(productToCart));
  };

  return (
    <Container>
      <Header />
      <ContainerSize>
        <SingleProduct addProductCard={addProductCart} {...product} />
      </ContainerSize>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.data,
});

export default connect(mapStateToProps)(Product);
