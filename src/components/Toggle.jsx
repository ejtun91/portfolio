import styled from "styled-components";
import Sun from "../images/sun.png";
import Moon from "../images/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../context";
import { mobile } from "../responsive";
import "../App.scss";

const Container = styled.div`
  width: 55px;
  height: 30px;
  border-radius: 30px;
  border: 2px solid #777777;
  background-color: white;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const Image = styled.img`
  width: 20px;
  height: 20px;
  margin: 3px;
`;
const Button = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #929292;
  position: absolute;
  cursor: pointer;
  transition: 0.5s ease;
`;

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <Container
      style={{
        backgroundColor: theme.state.darkMode ? "#333" : "#8eddf1",
      }}
    >
      <Image src={Sun} />
      <Image src={Moon} />
      <Button
        position="distance"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? "0" : "25px" }}
      ></Button>
    </Container>
  );
};

export default Toggle;
