import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  text-align: center;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  ${mobile({ fontSize: "25px" })}
`;

const Header = () => {
  return (
    <Container>
      <Title>Portfolio</Title>
    </Container>
  );
};

export default Header;
