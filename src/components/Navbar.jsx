import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThemeContext } from "../context";
import Toggle from "./Toggle";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 150px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 200;

  ${mobile({ height: "100px" })}
`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;

const Item = styled.li`
  cursor: pointer;
  font-weight: 700;

  ${mobile({ fontWeight: "500" })}
`;

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Container
      style={{
        backgroundColor: darkMode ? "#222a2c" : "#7ed7f5",
      }}
    >
      <Navigation>
        <Link to="/" className="link">
          <Item>Home</Item>
        </Link>
        <Item>
          <a className="link" href="#portfolio">
            Portfolio
          </a>
        </Item>
        <Item>
          {" "}
          <a className="link" href="#about">
            About
          </a>
        </Item>
        <Item>
          {" "}
          <a className="link" href="#contact">
            Contact
          </a>
        </Item>
        <Toggle />
      </Navigation>
    </Container>
  );
};

export default Navbar;
