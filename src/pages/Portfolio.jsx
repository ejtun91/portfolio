import { useContext } from "react";
import styled from "styled-components";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Portfoliolist from "../components/PortfolioList";
import { ThemeContext } from "../context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5em;
`;

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Container
      style={{
        backgroundColor: darkMode ? "#323c3f" : "#f1f4f5",
      }}
    >
      <Navbar />
      <Header />
      <Portfoliolist />
      <About />
      <Contact />
    </Container>
  );
};

export default Portfolio;
