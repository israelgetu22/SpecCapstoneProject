import {
  ContactPhoneOutlined,
  Facebook,
  Instagram,
  MyLocationOutlined,
  Telegram,
  Twitter,
  EmailOutlined,
} from "@material-ui/icons";
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

const Logo = styled.h1`
  color: red;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  position: relative;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
// const Payment = styled.img`
//   position: absolute;
//   margin-bottom: 20px;
// `;

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
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Telegram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Link</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Account</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>WishList</ListItem>
        </List>
      </Center>
      <Right>
        <Title> Contact</Title>
        <ContactItem>
          <MyLocationOutlined style={{ marginRight: "10px" }} /> Dallas, Texas
        </ContactItem>
        <ContactItem>
          <ContactPhoneOutlined style={{ marginRight: "10px" }} />
          +1111 111 111
        </ContactItem>
        <ContactItem>
          <EmailOutlined style={{ marginRight: "10px" }} /> contact@xstore.com
        </ContactItem>
        {/* <Payment src="https://i.ibb.co/4fFzqDV/d.png" /> */}
      </Right>
    </Container>
  );
};

export default Footer;
