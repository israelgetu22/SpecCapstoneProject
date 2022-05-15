import React from "react";
import styled from "styled-components";

//linear-gradient(rgba(255, 255, 255, 0.5)),
//rgba(255, 255, 255, 0.5),
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://thumbs.dreamstime.com/b/big-sales-concept-excited-girl-running-shopping-bags-over-blue-turquoise-studio-wall-copy-space-overjoyed-woman-189782310.jpg")
    center;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 400%;
  border: none;
  padding: 10px 5px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username " />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement> creating an account</Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
