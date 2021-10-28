import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context";
import emailjs from "emailjs-com";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3em;
  scroll-margin-top: 150px;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;

  ${mobile({ width: "85%" })}
`;
const Desc = styled.p`
  ${mobile({ fontSize: "14px", textAlign: "center" })}
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 3em;

  ${mobile({ width: "65%" })}
`;
const Input = styled.input`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;

  &:focus {
    outline: none;
  }
`;
const Textarea = styled.textarea`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  height: 150px;

  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  width: 30%;
  align-self: center;
  padding: 10px 0;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 17px;
  transition: 0.2s ease;

  &:hover {
    background-color: gray;
    color: white;
  }
`;

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [emailSent, setEmailSent] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sage0jc",
        "template_e59faif",
        formRef.current,
        "user_fN2wp23ZDkG5XeV0KKr5u"
      )
      .then(
        (result) => {
          console.log(result.text);
          formRef.current.reset();
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
          setEmailSent(false);
        }
      );
  };

  useEffect(() => {
    setTimeout(() => {
      setEmailSent(false);
    }, 5000);
  }, [emailSent]);

  return (
    <Container id="contact">
      <Wrapper
        style={{
          backgroundColor: darkMode ? "#222a2c" : "#7ed7f5",
        }}
      >
        <Desc>
          Hi there, you can contact me through the form below or sending me
          message on{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            social media
          </span>
          , or maybe you want to download my{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            resume
          </span>
          .
        </Desc>
        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <Input
            type="text"
            name="user_name"
            placeholder="enter your name"
            required
          />
          <Input
            type="text"
            name="user_subject"
            placeholder="enter subject"
            required
          />
          <Input
            type="email"
            name="user_email"
            placeholder="enter your email"
            required
          />
          <Textarea
            required
            name="message"
            placeholder="write here..."
          ></Textarea>
          <Button type="submit">Send</Button>
          {emailSent && (
            <span style={{ color: "green", alignSelf: "center" }}>
              Email Sent...
            </span>
          )}
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
