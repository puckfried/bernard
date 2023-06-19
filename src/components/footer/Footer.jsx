import styled from 'styled-components';
const Container = styled.div`
  height: 10vh;
  width: 100%;
  background-color: #212122;
  color: white;
`;
const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0rem 2rem;
`;
const Title = styled.p`
  border-top: 1px solid white;
  width: 100%;
  text-align: center;
  line-height: 10vh;
`;

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <Title> © Bernard Ngassa 2023</Title>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
