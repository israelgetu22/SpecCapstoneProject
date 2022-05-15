import React from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.div`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopBottom = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background: ${(props) => (props.type === "filled" ? "black" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
`;

const ProductDetail = styled.div``;
const Image = styled.div``;
const Details = styled.div``;
const ProductName = styled.div``;
const PriceDetail = styled.div``;
const ProductId = styled.div``;
const ProductColor = styled.div``;
const ProductSize = styled.div``;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopBottom>CONTINUE SHOPPING</TopBottom>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopBottom type="filled">CHECKOUT NOW</TopBottom>
        </Top>
        <Bottom>
          <Info>
            <ProductDetail>
              <Image src="" />
              <Details>
                <ProductName>
                  <b>Product:</b> JESSIE THUNDER SHOES
                </ProductName>
                <ProductId>
                  <b>ID:</b> JESSIE THUNDER SHOES
                </ProductId>
                <ProductColor />
                <ProductSize>
                  <b>Size</b>37.5
                </ProductSize>
              </Details>
            </ProductDetail>
            <PriceDetail>Price</PriceDetail>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
