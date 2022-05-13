import { Facebook, Instagram, Telegram, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Logo = styled.div``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div``;
const SocialIcon = styled.div``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>XLogo</Logo>
        <Desc>
          We can combine the two by making the React state be the “single source
          of truth”. Then the React component that renders a form also controls
          what happens in that form on subsequent user input. An input form
          element whose value is controlled by React in this way is called a
          “controlled component”
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Telegram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center />
      <Right />
    </Container>
  );
};

export default Footer;
