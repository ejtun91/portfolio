import Home from "./pages/Home";
import styled from "styled-components";
import Portfolio from "./pages/Portfolio";
import Toggle from "./components/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Container = styled.div``;

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Router>
      <Container
        style={{
          backgroundColor: darkMode ? "#3f4c50" : "#f1f4f5",
          color: darkMode ? "white" : "#333",
        }}
      >
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Container>
    </Router>
  );
};

export default App;
