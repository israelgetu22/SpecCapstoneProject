import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 70px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 0px 10px 10px 0px;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.div`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>News Paper</Title>
      <Description>Get Timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your Email"></Input>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
