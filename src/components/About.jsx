import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-margin-top: 150px;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 20px;
  gap: 2em;

  ${mobile({ width: "85%" })}
`;
const Image = styled.img`
  width: 25%;
  height: 200px;
  object-fit: cover;
  border: 1px solid black;
  border-radius: 5px;

  ${mobile({ objectFit: "contain", height: "auto" })}
`;
const Desc = styled.p`
  width: 80%;
  text-align: center;

  ${mobile({ width: "90%", fontSize: "14px" })}
`;
const Info = styled.div`
  display: flex;
  width: 80%;
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border-radius: 5px;
  gap: 2em;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
  ${mobile({ width: "90%" })}
`;
const Icon = styled.img`
  width: 120px;
  height: 100px;
  object-fit: contain;

  ${mobile({ width: "35px", height: "35px" })}
`;

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Container id="about">
      <Wrapper
        style={{
          backgroundColor: darkMode ? "#222a2c" : "#7ed7f5",
        }}
      >
        <Image src="https://path2nowhere.com/images/profile.jpg" />
        <Desc>
          Hello, my name is Antonio Knezovic and this is my portfolio website
          where you can see my latest work in web development. I recently
          graduated from TU Dublin and I'm holding a degree in Computer Science.
          I am very commited and I can say very obsessive with the development
          in general and I am expanding my knowledge every day.
        </Desc>
        <Info>
          <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" />
          <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" />
          <Icon src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/175/square_480/csslang.png" />
          <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
          <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
          <Icon src="https://www.cloudsavvyit.com/p/uploads/2021/07/f5932bc2.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1" />
        </Info>
      </Wrapper>
    </Container>
  );
};

export default About;
