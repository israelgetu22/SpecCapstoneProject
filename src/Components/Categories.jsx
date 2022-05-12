import React from "react";
import styled from "styled-components";
import { cataegories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
`;

const Categories = () => {
  return (
    <Container>
      {cataegories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
