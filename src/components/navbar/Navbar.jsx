import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import LebensLauft from '../../../public/download/LebensLauft.pdf';
import { Link } from 'react-scroll';
import { AiOutlineUp } from 'react-icons/ai';

// commented Lebenslauf, kann nicht aus public geladen werden

const Container = styled.div`
  height: 10vh;
  width: 100vw;
  padding: 0rem 2rem;
  position: fixed;
  z-index: 2000;
  color: white;
  @media (max-width: 550px) {
    padding: 1rem;
    background-color: white;
    color: black;
  }
`;
const ComputerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: ${(computer) => (computer ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  // border-bottom: 1px solid lightgray;

  @media (max-width: 550px) {
    display: ${(handy) => (handy ? 'none' : 'block')};
    border-bottom: none;
  }
`;
const HandyContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  display: ${(computer) => (computer ? 'none' : 'none')};
  @media (max-width: 550px) {
    display: ${(handy) => (handy ? 'flex' : 'none')};
    z-index: 1000;
  }
`;
const LogoContainer = styled.div`
  flex: 0.5;
  display: ${(computer) => (computer ? 'block' : 'none')};
  @media (max-width: 550px) {
    display: ${(handy) => (handy ? 'block' : 'block')};
  }
`;
const Logo = styled.h1`
  @media (max-width: 820px) {
    font-size: 1.25rem;
  }
  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;
const Ul = styled.ul`
  flex: 3.5;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 850px) {
    gap: 1rem;
  }
  @media (max-width: 655px) {
    gap: 0.5rem;
  }
  @media (max-width: 550px) {
    border-bottom: none;
    flex-direction: column;
    gap: 1.2rem;
  }
`;
const UlHandyContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 100%;
  bottom: 0;
  left: 0;
  padding-top: 5rem;
  background-color: white;
`;
const Li = styled(Link)`
  list-style: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    border-bottom: 2px solid white;
  }
  @media (max-width: 1020px) {
    font-size: 0.9rem;
  }
  @media (max-width: 970px) {
    font-size: 0.8rem;
  }
  @media (max-width: 905px) {
    font-size: 0.7rem;
  }
  @media (max-width: 830px) {
    font-size: 0.65rem;
  }
  @media (max-width: 770px) {
    font-size: 0.55rem;
  }
  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;
// const Button = styled.button`
//   border: none;
//   color: black;
//   border-radius: 0.2rem;
//   padding: 0.5rem 0.6rem;
//   cursor: pointer;
//   font-weight: bold;
//   background-color: #2e388b;
//   color: white;
//   @media (max-width: 820px) {
//     font-size: 0.7rem;
//   }
//   @media (max-width: 782px) {
//     font-size: 0.65rem;
//   }
//   @media (max-width: 750px) {
//     font-size: 0.55rem;
//   }
//   @media (max-width: 750px) {
//     font-size: 0.4rem;
//   }
//   @media (max-width: 550px) {
//     font-size: 0.55rem;
//     background-color: #242c2b;
//     color: white;
//     font-weight: 1.5rem;
//   }
// `;

const MenuIconsContainer = styled.div`
  font-size: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
// const Download = styled.a``;
const ScrollTopContainer = styled(Link)`
  position: fixed;
  right: 2.5%;
  top: 90%;
  font-size: 3rem;
  background-color: #cdeef3;
  color: black;
  width: 3.5rem;
  height: 3.5rem;
  text-align: center;
  border-radius: 0.15rem;
  cursor: pointer;
`;
const ScrollContainer = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  animation: arrowBlink 2s infinite;

  @keyframes arrowBlink {
    100% {
      opacity: 0.25;
    }
  }
`;
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [noTop, setNoTop] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const ChangeBackground = () => {
    if (window.scrollY >= 430) {
      setNavbar(true);
    } else if (window.scrollY >= 203) {
      setNoTop(true);
    } else {
      setNavbar(false);
      setNoTop(false);
    }
  };

  window.addEventListener('scroll', ChangeBackground);

  return (
    <Container className={navbar ? 'notActiveNavColor' : 'activeNavColor'}>
      <ComputerContainer computer="true">
        <LogoContainer>
          <Li to="home" smooth={true} offset={-100} duration={500}>
            <Logo>NGASSA.</Logo>
          </Li>
        </LogoContainer>
        <Ul>
          <Li
            activeClass="activeLink"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            HOME
          </Li>
          <Li
            activeClass="activeLink"
            to="about"
            spy={true}
            smooth={true}
            offset={40}
            duration={500}
          >
            ABOUT ME
          </Li>
          <Li
            activeClass="activeLink"
            to="works"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            WORKS
          </Li>
          <Li
            activeClass="activeLink"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            PORTFOLIO
          </Li>
          <Li
            activeClass="activeLink"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            TESTIMONIALS
          </Li>
          <Li
            activeClass="activeLink"
            to="contact"
            spy={true}
            smooth={true}
            offset={60}
            duration={500}
          >
            CONTACT
          </Li>
          {/* <Download href={LebensLauft} downloaad={LebensLauft}>
            <Button>DOWNLOAD CV</Button>
          </Download> */}
        </Ul>
      </ComputerContainer>
      <HandyContainer handy="true">
        <LogoContainer>
          <Li to="home" smooth={true} offset={-100} duration={500}>
            <Logo>NGASSA.</Logo>
          </Li>
        </LogoContainer>

        {openMenu && (
          <UlHandyContainer>
            <Ul>
              <Li
                onClick={() => setOpenMenu(false)}
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                HOME
              </Li>
              <Li
                onClick={() => setOpenMenu(false)}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={40}
                duration={500}
              >
                ABOUT ME
              </Li>
              <Li
                onClick={() => setOpenMenu(false)}
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                WORKS
              </Li>
              <Li
                onClick={() => setOpenMenu(false)}
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                PORTFOLIO
              </Li>
              <Li
                onClick={() => setOpenMenu(false)}
                activeClass="active"
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                TESTIMONIALS
              </Li>
              <Li
                onClick={() => setOpenMenu(false)}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                CONTACT
              </Li>
              {/* <Download href={LebensLauft} downloaad={LebensLauft}>
                <Button>DOWNLOAD CV</Button>
              </Download> */}
            </Ul>
          </UlHandyContainer>
        )}
        <MenuIconsContainer>
          {openMenu ? (
            <AiOutlineClose onClick={() => setOpenMenu(false)} />
          ) : (
            <AiOutlineMenu onClick={() => setOpenMenu(true)} />
          )}
        </MenuIconsContainer>
      </HandyContainer>
      <ScrollTopContainer
        to="home"
        smooth={true}
        offset={-100}
        duration={500}
        className={noTop ? 'change' : 'notChange'}
      >
        <ScrollContainer>
          <AiOutlineUp />
        </ScrollContainer>
      </ScrollTopContainer>
    </Container>
  );
};

export default Navbar;
