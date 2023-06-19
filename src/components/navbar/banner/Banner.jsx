/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';
import bernard from '../../../../public/images/bernard.png';
import Typewriter from 'typewriter-effect';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io';
import {
  SiJavascript,
  SiReact,
  SiThreedotjs,
  SiExpress,
  SiAdobecreativecloud,
} from 'react-icons/si';
import { Link } from 'react-scroll';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const LeftContainer = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 550px) {
    flex: 3;
    height: 60%;
  }
  @media (max-width: 450px) {
    flex: 3;
    height: 40%;
  }
  @media (max-width: 350px) {
    flex: 3;
    height: 30%;
  }
`;
const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  padding: 1rem;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.55);
  color: white;
  @media (max-width: 550px) {
    border-top: none;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 0.5em;
  flex-direction: column;

  @media (max-width: 550px) {
    padding: 1rem;
    align-items: center;
  }
`;
const TitleContent = styled.h1`
  font-size: 3.6rem;
  @media (max-width: 950px) {
    font-size: 2.6rem;
    text-align: center;
  }
  @media (max-width: 750px) {
    font-size: 2rem;
    text-align: center;
  }
  @media (max-width: 550px) {
    text-align: center;
    font-size: 2.6rem;
  }
  @media (max-width: 375px) {
    text-align: center;
    font-size: 1.8rem;
  }
`;
const SubTitleContent = styled.h2`
  font-size: 5rem;
  font-weight: 300;
  @media (max-width: 950px) {
    font-size: 3.5rem;
    text-align: center;
  }
  @media (max-width: 750px) {
    font-size: 2rem;
    text-align: center;
  }
  @media (max-width: 550px) {
    font-size: 3rem;
    text-align: center;
  }
  @media (max-width: 375px) {
    font-size: 2rem;
    text-align: center;
  }
`;
const SubTitle = styled.h3`
  font-size: 2.1rem;
  font-weight: 300;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
    font-size: 1.5rem;
    text-align: center;
  }
  @media (max-width: 750px) {
    font-size: 1.8rem;
    text-align: center;
  }
  @media (max-width: 375px) {
    font-size: 1.25rem;
    text-align: center;
  }
`;
const MailIconContainer = styled.div`
  font-size: 3rem;
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  animation: arrowBlink 2s infinite;
  color: white;
  @keyframes arrowBlink {
    100% {
      opacity: 0;
    }
  }
`;
const StyledInput = styled.span`
  font-size: 3.35rem;
  font-weight: 200;
  display: flex;
  justify-content: center;
  color: #cdeef3;
  @keyframes animate {
    0% {
      left: 0;
    }
    50% {
      left: 100%;
    }
    100% {
      left: 0;
    }
  }
  @media (max-width: 950px) {
    font-size: 2.5rem;
    text-align: center;
  }
  @media (max-width: 750px) {
    font-size: 2rem;
    text-align: center;
  }
  @media (max-width: 550px) {
    text-align: center;
    font-size: 2.5rem;
  }
  @media (max-width: 375px) {
    text-align: center;
    font-size: 1.8rem;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-position: 5px 15%;
  object-fit: cover;
  @media (max-width: 550px) {
    object-position: 0px 0%;
  }
`;

const IconsContainer = styled.div`
  width: 100%;

  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  @media (max-width: 550px) {
    padding: 0rem;
  }
`;
const htmlStyle = {
  color: '#FF4010',
  fontSize: '4rem',
};
const cssStyle = {
  color: 'blue',
  fontSize: '3.5rem',
};
const javascriptStyle = {
  color: '#FFC02C',
  backgroundColor: 'black',
  fontSize: '3rem',
};

const reactStyle = {
  color: '#00AFD2',
  fontSize: '4rem',
};
const nodeStyle = {
  color: '#0EAD4E',
  fontSize: '4rem',
};
const threeStyle = {
  fontSize: '3rem',
};
const siStyle = {
  fontSize: '4rem',
};
const adobeStyle = {
  color: '#C40000',
  fontSize: '4rem',
};

const Banner = () => {
  return (
    <Container id="home">
      <LeftContainer>
        <Image src={bernard} alt={bernard} />
      </LeftContainer>
      <RightContainer>
        <ContentContainer>
          <SubTitleContent>Hi there, I'm </SubTitleContent>
          <TitleContent>Bernard Ngassa</TitleContent>
          <SubTitle>
            <StyledInput>
              <Typewriter
                options={{
                  strings: [
                    'Web developer',
                    'Graphic Designer',
                    'Web designer',
                    'Video editing',
                    'and more...',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </StyledInput>
          </SubTitle>
          <IconsContainer>
            <AiFillHtml5 style={htmlStyle} />
            <IoLogoCss3 style={cssStyle} />
            <SiJavascript style={javascriptStyle} />
            <SiReact style={reactStyle} />
            <IoLogoNodejs style={nodeStyle} />
            <SiExpress style={siStyle} />
            <SiThreedotjs style={threeStyle} />
            <SiAdobecreativecloud style={adobeStyle} />
          </IconsContainer>
        </ContentContainer>
      </RightContainer>
      <MailIconContainer>
        <Link
          activeClass="activeLink"
          to="about"
          spy={true}
          smooth={true}
          offset={40}
          duration={500}
        >
          <AiOutlineDown />
        </Link>
      </MailIconContainer>
    </Container>
  );
};

export default Banner;
