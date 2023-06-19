import styled from 'styled-components';
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiFillLinkedin,
} from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 2rem;
  flex-direction: column;
  @media (max-width: 550px) {
    padding: 2rem 0.5rem 10rem 0.5rem;
  }
`;
const TitleContent = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  @media (max-width: 420px) {
    font-size: 2.5rem;
  }
`;
const Left = styled.div`
  flex: 2;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  flex-direction: column;
  @media (max-width: 932px) {
    padding: 2rem 8rem;
  }
  @media (max-width: 550px) {
    padding-top: 2rem;
  }
  @media (max-width: 868px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 720px) {
    padding: 0rem 0rem;
  }
`;
const Right = styled.div`
  flex: 2;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  @media (max-width: 550px) {
    padding-top: 2rem;
  }
`;
const ContactContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 4rem 15rem;
  gap: 1rem;
  background-color: #212122;
  color: white;
  @media (max-width: 1590px) {
    padding: 4rem 4rem;
  }
  @media (max-width: 1250px) {
    padding: 2rem 2rem;
  }
  @media (max-width: 420px) {
    padding: 2rem 1rem;
  }
`;
const ContactTitle = styled.h3``;
const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.25rem;
  gap: 0.5rem;
`;
const ContactTitleInfo = styled.p`
  padding: 3rem;
  font-size: 1.25rem;
  text-align: center;
  @media (max-width: 550px) {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;
const ContactInfos = styled.p`
  font-size: 1.25rem;
  text-align: center;
  @media (max-width: 550px) {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;
const ContactTitleInformation = styled.p`
  font-size: 1.2rem;
  padding: 0 3rem;
  @media (max-width: 1868px) {
    padding: 0rem 3.2rem;
  }
  @media (max-width: 932px) {
    padding: 2rem 8rem;
  }
  @media (max-width: 868px) {
    padding: 2rem 4rem;
  }
  @media (max-width: 720px) {
    padding: 2rem 0rem;
  }
  @media (max-width: 550px) {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;
const Form = styled.form`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 675px) {
    width: 100%;
  }
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  outline: none;
`;
const TextArea = styled.textarea`
  margin-top: 1rem;
  height: 12.5rem;
  padding: 0.75rem;
  outline: none;
`;
const Button = styled.button`
  border: none;
  color: #212122;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.25rem;
  text-transform: uppercase;
  margin-top: 2rem;
  transition: color 0.7s linear;
  background-color: #cdeef3;
  border-radius: 0.2rem;
  &:hover {
    background-color: #212122;
    color: white;
    border: 1px solid white;
  }
  @media (max-width: 1201px) {
    font-size: 1rem;
  }
`;

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_k5tn1tj',
        'template_yjfblfc',
        form.current,
        'bTSMMSGmytdlLUD0Y'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container id="contact">
      <TitleContent>GET IN TOUCH</TitleContent>
      <ContactTitleInfo>
        Always available for freelancing if the right project comes along, Feel
        free to contact me.
      </ContactTitleInfo>
      <ContactContainer>
        <Left>
          <ContactTitle>Phone</ContactTitle>
          <IconsContainer>
            <AiOutlineWhatsApp />
            <ContactInfos>017621847169</ContactInfos>
          </IconsContainer>
          <ContactTitle>Email</ContactTitle>
          <IconsContainer>
            <AiOutlineMail />
            <ContactInfos>berlioz2001@yahoo.fr</ContactInfos>
          </IconsContainer>
          <ContactTitle>Linkedin</ContactTitle>
          <IconsContainer>
            <AiFillLinkedin />
            <ContactInfos>bernard-ngassa</ContactInfos>
          </IconsContainer>
        </Left>

        <Right>
          <ContactTitleInformation>
            If you have any suggestion, project or even you want to say Hello..
            please fill out the form below and I will reply you shortly.
          </ContactTitleInformation>
          <Form ref={form}>
            <InputContainer>
              <Input placeholder="YOUR NAME" type="text" name="user_name" />
              <Input placeholder="YOUR EMAIL" type="text" name="user_email" />
            </InputContainer>
            <TextArea
              name="message"
              placeholder="YOUR MESSAGE"
              rows="4"
              cols="50"
              type="text"
            />
            <Button onClick={sendEmail}>SEND MESSAGE</Button>
          </Form>
        </Right>
      </ContactContainer>
    </Container>
  );
};

export default Contact;
