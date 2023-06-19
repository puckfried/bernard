/* eslint-disable no-unused-vars */
import styled from 'styled-components';
// import bernardOne from '../../../public/images/bernardOne.jpg';
// import LebensLauft from '../../../public/download/LebensLauft.pdf';

// commented Lebenslauf, kann nicht aus public geladen werden

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10rem 2rem;
  background-color: #212122;
  color: white;
  gap: 1rem;
  flex-direction: column;
`;
const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  background-color: #212122;
  color: white;
  gap: 1rem;
  @media (max-width: 400px) {
    padding: 5rem 0rem;
  }
`;
const TitleContent = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  @media (max-width: 428px) {
    font-size: 2.5rem;
  }
  @media (max-width: 300px) {
    font-size: 1.8rem;
  }
`;
const Left = styled.div`
  flex: 2;

  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  align-items: center;
`;
const Right = styled.div`
  flex: 2;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  flex-direction: column;
  @media (max-width: 550px) {
    padding-top: 2rem;
  }
`;
const Image = styled.img`
  width: 30rem;
  height: 100%;
  border: 5px solid #aaaaae;
  @media (max-width: 1201px) {
    width: 20rem;
  }
  @media (max-width: 913px) {
    width: 15rem;
  }
`;
const Title = styled.h3`
  font-size: 3rem;
  @media (max-width: 1201px) {
    font-size: 2rem;
  }
  @media (max-width: 550px) {
    font-size: 1.65rem;
  }
`;
const SubTitle = styled.span`
  font-size: 1.5rem;
  @media (max-width: 1201px) {
    font-size: 1.25rem;
  }
`;
const Text = styled.p`
  font-size: 1.15rem;
  font-weight: 300;
  @media (max-width: 1201px) {
    font-size: 1rem;
  }
`;
const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5rem;
  padding-top: 2rem;

  @media (max-width: 550px) {
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 1.5rem;
  }
`;
const ContactLeft = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 1.5rem;
`;
const ContactLeftContainer = styled.div`
  display: flex;
  width: 100%;

  gap: 0.5rem;
`;
const ContactRight = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 1.5rem;
`;
const ContactTitle = styled.h4`
  font-size: 1.2rem;
  @media (max-width: 1201px) {
    font-size: 1rem;
  }
`;
const ContactInfos = styled.p`
  font-size: 1.2rem;
  @media (max-width: 1201px) {
    font-size: 0.8rem;
  }
`;
const Button = styled.button`
  background-color: #2e388b;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.25rem;
  text-transform: uppercase;
  margin-top: 2rem;
  transition: color 0.7s linear;
  border-radius: 0.2rem;
  &:hover {
    background-color: #cdeef3;
    color: black;
  }
  @media (max-width: 1201px) {
    font-size: 1rem;
  }
`;
const Download = styled.a``;
const About = () => {
  return (
    <Container id="about">
      <TitleContent>About me</TitleContent>
      <ContentContainer>
        <Left>
          {/* <Image src={bernardOne} alt={bernardOne} /> */}
        </Left>
        <Right>
          <Title>Bernard Ngassa</Title>
          <SubTitle>
            A Web developer and Product Designer based in Germany
          </SubTitle>
          <Text>
            I design and develop services for clients of all sizes, specialized
            in creating elegant and modern websites, web services and online
            stores. My passion is to design digital user experiences through the
            bold interface and meaningful interactions. Check out my Portfolio.
          </Text>
          <ContactContainer>
            <ContactLeft>
              <ContactLeftContainer>
                <ContactTitle>Birthday </ContactTitle>
                <ContactInfos> |</ContactInfos>
                <ContactInfos> 18 april 1979 </ContactInfos>
              </ContactLeftContainer>
              <ContactLeftContainer>
                <ContactTitle>Age</ContactTitle>
                <ContactInfos> |</ContactInfos>
                <ContactInfos> 44 years </ContactInfos>
              </ContactLeftContainer>
              <ContactLeftContainer>
                <ContactTitle>Residence</ContactTitle>
                <ContactInfos> |</ContactInfos>
                <ContactInfos> Germany </ContactInfos>
              </ContactLeftContainer>
              <ContactLeftContainer>
                <ContactTitle>Address</ContactTitle>
                <ContactInfos> |</ContactInfos>
                <ContactInfos> Oldenburg </ContactInfos>
              </ContactLeftContainer>
            </ContactLeft>
            <ContactRight>
              <ContactLeftContainer>
                <ContactTitle>Email </ContactTitle>
                <ContactInfos> |</ContactInfos>
                <ContactInfos> berlioz2001@yahoo.fr </ContactInfos>
              </ContactLeftContainer>
              <ContactLeftContainer>
                <ContactTitle>Phone</ContactTitle>
                <ContactInfos> |</ContactInfos>
                <ContactInfos> 017621847169 </ContactInfos>
              </ContactLeftContainer>
              <ContactLeftContainer>
                <ContactTitle>Linkedin</ContactTitle>
                <ContactInfos> |</ContactInfos>
                <ContactInfos> bernard-ngassa </ContactInfos>
              </ContactLeftContainer>
              <ContactLeftContainer>
                <ContactTitle>Job</ContactTitle>
                <ContactInfos> |</ContactInfos>
                <ContactInfos> search </ContactInfos>
              </ContactLeftContainer>
            </ContactRight>
          </ContactContainer>
          {/* <Download href={LebensLauft} downloaad={LebensLauft}>
            <Button>DOWNLOAD CV</Button>
          </Download> */}
        </Right>
      </ContentContainer>
    </Container>
  );
};

export default About;
