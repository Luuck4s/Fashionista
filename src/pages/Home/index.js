import React, { useEffect, useState } from "react";

import { Container, ContainerSize, ProductsArea } from "./styles";

import api from "../../services/api";

import Header from "../../components/Header";
import Product from "../../components/Product";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/catalog");
      setProducts(response.data);
    };

    getData();
  }, []);

  return (
    <Container>
      <Header />
      <ContainerSize>
        <ProductsArea>
          {products.map((product) => (
            <Product
              key={product.code_color}
              name={product.name}
              price={product.actual_price}
              imgLink={product.image && product.image}
            />
          ))}
        </ProductsArea>
      </ContainerSize>
    </Container>
  );
}
