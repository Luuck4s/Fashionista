import React, { useEffect } from "react";

import {
  Container,
  ContainerSize,
  CountArea,
  CountProducts,
  ProductsArea,
} from "./styles";

import { connect, useDispatch } from "react-redux";
import { setInitialStore } from "../../store/actions/products";

import api from "../../services/api";

import Header from "../../components/Header";
import Product from "../../components/Product";

function Home({ products }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/catalog");
      dispatch(setInitialStore(response.data));
    };

    getData();
  }, [dispatch]);

  return (
    <Container>
      <Header counter={0} />
      <ContainerSize>
        <CountArea>
          <CountProducts>{products.length} Items</CountProducts>
        </CountArea>
        <ProductsArea>
          {products.map((product) => (
            <Product key={product.code_color} {...product} />
          ))}
        </ProductsArea>
      </ContainerSize>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.data,
});

export default connect(mapStateToProps)(Home);
