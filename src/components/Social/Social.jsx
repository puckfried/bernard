import styled from 'styled-components';
const Container = styled.div`
  display: none;
  width: 25rem;
  height: 50%;
  background-color: white;
  position: fixed;
  margin: 0 auto;
  bottom: 35%;
  left: 97%;
  border-top-left-radius: 80px 80px;
  border-bottom-left-radius: 80px 80px;
  transition: all 0.5s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  z-index: 35;
  &:hover {
    left: 92%;
  }
  @media (max-width: 1434px) {
    bottom: 25%;
    height: 65%;
    left: 96%;
    &:hover {
      left: 88%;
    }
  }
  @media (max-width: 1015px) {
    left: 95%;
    &:hover {
      left: 85%;
    }
  }
  @media (max-width: 962px) {
    left: 94%;
    &:hover {
      left: 83%;
    }
  }
  @media (max-width: 750px) {
    display: none;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding-left: 10px;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
const TitleContent = styled.h1`
  font-size: 1.5rem;
  writing-mode: sideways-rl;
  text-orientation: upright;
`;

const Social = () => {
  return (
    <Container>
      <TitleContainer>
        <TitleContent>SOCIAL MEDIA & LANGUAGES</TitleContent>
      </TitleContainer>
    </Container>
  );
};

export default Social;
