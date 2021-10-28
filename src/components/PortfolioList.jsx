import { Link, GitHub } from "@mui/icons-material";
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context";
import { portfolio } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5em;
  transition: all 1s ease;
  scroll-margin-top: 150px;
`;
const Wrapper = styled.div`
  width: 80%;
  background-color: blanchedalmond;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  ${mobile({ width: "85%", gap: "1em" })}
`;
const Leftside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  gap: 1em;
`;
const Rightside = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  ${mobile({ fontSize: "15px" })}
`;
const Subtitle = styled.h3`
  ${mobile({ fontSize: "14px" })}
`;
const Image = styled.img`
  width: 60%;

  ${mobile({ width: "80%" })}
`;
const Icons = styled.div`
  display: flex;
  gap: 1em;
`;
const Icon = styled.span`
  cursor: pointer;
`;
const Desc = styled.p`
  font-size: 18px;
  ${mobile({ fontSize: "13px" })}
`;

const Portfoliolist = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Container id="portfolio">
      {portfolio.map((item) => (
        <Wrapper
          style={{
            backgroundColor: darkMode ? "#222a2c" : "#7ed7f5",
          }}
          key={item.id}
        >
          <Leftside>
            <Title>{item.title}</Title>
            <Subtitle>{item.info}</Subtitle>
            <Image src={item.img} />
            <Icons>
              <Icon>
                <a className="link" href={item.web}>
                  <Link />
                </a>
              </Icon>
              <Icon>
                <a className="link" href={item.git}>
                  <GitHub />
                </a>
              </Icon>
            </Icons>
          </Leftside>
          <Rightside>
            <Desc>{item.desc}</Desc>
          </Rightside>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Portfoliolist;
