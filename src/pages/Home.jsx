import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import "../App.scss";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 20%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #015871;
`;
const Wave = styled.div`
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg")
    repeat-x;
  position: absolute;
  top: -198px;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);

  &:nth-of-type(2) {
    top: -175px;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;
    opacity: 1;
  }
`;

const Square = styled.div`
  width: 500px;
  height: 350px;
  color: black;
  background-color: rgba(173, 216, 230, 0.3);
  position: absolute;
  left: calc(50% - 250px);
  top: calc(50% - 175px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 5px 5px 15px 5px #015871;
  box-shadow: 5px 5px 15px 5px #015871;

  ${mobile({
    width: "85%",
    left: 0,
    right: 0,
    margin: "auto",
    height: "200px",
  })}
`;

const Title = styled.h1`
  letter-spacing: 0.2em;
  width: 100%;
  text-align: center;

  ${mobile({ fontSize: "25px" })}
`;
const Subtitle = styled.h3`
  ${mobile({ fontSize: "17px" })}
`;

const Button = styled.button`
  cursor: pointer;
  padding: 15px;
  border-radius: 5px;
  z-index: 222;
  border: 2px solid black;
  transition: 0.2s ease-in-out;
  font-weight: 300;
  letter-spacing: 0.2em;
  background-color: white;

  ${mobile({ fontSize: "14px", letterSpacing: "0" })}

  &:hover {
    background-color: #00ccff;
    color: white;
    font-weight: 800;

    ${mobile({ fontWeight: "normal" })}
  }
`;

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/portfolio");
  };

  return (
    <Container>
      <Wrapper>
        <Wave></Wave>
        <Wave></Wave>
      </Wrapper>
      <Square>
        <Title>Antonio Knezovic</Title>
        <Subtitle>Full Stack Web Developer</Subtitle>
        <Button onClick={handleClick}>View my Portfolio</Button>
      </Square>
    </Container>
  );
};

export default Home;
