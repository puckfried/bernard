/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper';
import { data } from '../../../public/data/data';

import { AiOutlineClose } from 'react-icons/ai';
const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem 10rem 2rem;
  flex-direction: column;
  @media (max-width: 420px) {
    padding: 0rem 0.5rem 10rem 0.5rem;
  }
`;

const SliderContainer = styled.div`
  padding: 5rem 0;
`;
const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  border-radius: 0.5rem;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  object-position: top;
  border-radius: 0.5rem;
`;
const TitleContent = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  @media (max-width: 420px) {
    font-size: 2.5rem;
  }
`;
const ItemTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.5s linear;
`;
const Desc = styled.p`
  font-size: 1.25rem;
  text-align: center;
  position: absolute;
  margin: 0;
  font-weight: 200;
  padding-bottom: 0rem;
  @media (max-width: 1240px) {
    padding-top: 0rem;
  }
  @media (max-width: 950px) {
    padding-top: 1.5rem;
    font-size: 1rem;
  }
`;
const WorksTitle = styled.p`
  font-size: 1.25rem;
  text-align: center;
  @media (max-width: 550px) {
    font-size: 1rem;
  }
`;
const HerosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  height: 100%;
  width: 100%;

  color: black;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 50%;
  bottom: 0%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-direction: column;
  background-color: #212122;
  color: white;
  transition: all 0.5s linear;
  height: 100%;
  top: 0%;
  // &:hover {
  //   height: 50%;
  //   top: 50%;
  // }
  border-radius: 0.5rem;
  padding: 2rem;
  @media (max-width: 1080px) {
    gap: 2rem;
  }
  @media (max-width: 1022px) {
    gap: 0rem;
  }
`;
const Button = styled.button`
  margin-top: 8rem;
  padding: 0.5rem 0.8rem;
  border-radius: 0.2rem;
  background-color: transparent;
  background-color: #cdeef3;
  font-weight: bold;
  font-size: 1.05rem;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
  &: hover {
    background-color: white;
    color: black;
  }
  @media (max-width: 550px) {
    margin-top: 10rem;
  }
`;

const PopUp = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.722);
  z-index: 20;
  position: fixed;
  top: 0%;
  bottom: 0%;
  overflow: hidden;
`;
const PopUpContainer = styled.div`
  height: 70%;
  width: 70%;
  position: fixed;
  background-color: white;
  z-index: 20;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem;
  @media (max-width: 1342px) {
    width: 90%;
  }
  @media (max-width: 1065px) {
    width: 95%;
  }
  @media (max-width: 937px) {
    width: 90%;
  }
  @media (max-width: 830px) {
    width: 100%;
  }
`;
const PopUpImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
`;
const PopUpTitle = styled.h1`
  @media (max-width: 350px) {
    font-size: 1.5rem;
  }
`;
const ClosePopUpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;
const PopUpButton = styled.button`
  border: none;
  background-color: none;
  margin-top: 2rem;
  margin-left: 2rem;

  @media (max-width: 750px) {
    margin-left: 1rem;
  }
`;
const closeStyle = {
  fontSize: '1.5rem',
  width: '5rem',
  cursor: 'pointer',
};
const Download = styled.a`
  position: absolute;
  padding: 0.5rem 0.8rem;
  background-color: #cdeef3;
  color: black;
  font-weight: bold;
  font-size: 1.05rem;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  border-radius: 0.2rem;
  transition: all 0.5s ease-in-out;
  text-decoration: none;

  &: hover {
    background-color: white;
    color: black;
  }
`;
const InfosContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  top: 30%;
  height: 70%;
  background-color: #212122;
  color: white;
  padding: 1rem 0rem;

  @media (max-width: 1065px) {
    font-size: 1rem;
  }
  @media (max-width: 745px) {
    font-size: 1rem;
    padding: 1rem 0;
  }
  @media (max-width: 550px) {
    top: 15%;
    height: 100%;
  }
`;

const InfoText = styled.p`
  font-size: 1.15rem;
  padding: 0 1rem;
  font-weight: 300;
  padding-bottom: 5rem;
  @media (max-width: 1065px) {
    font-size: 1rem;
  }
  @media (max-width: 745px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
  @media (max-width: 635px) {
    font-size: 0.9rem;
  }

  @media (max-width: 350px) {
    font-size: 0.85rem;
  }
`;

const Works = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [details, setDetails] = useState([data[0]]);
  const allDetails = data.filter((element) => element.id);
  const handleDetail = (index) => {
    const found = allDetails.find((element) => element.id === index);
    setOpenPopUp(!openPopUp);
    setDetails(found);
    console.log(found);
  };
  return (
    <Container id="works">
      <SliderContainer>
        <ItemsContainer>
          <TitleContent>Works</TitleContent>
          <WorksTitle>
            A collection of my favorite projects that I recently created. Feel
            comfortable sharing here.
          </WorksTitle>
        </ItemsContainer>
      </SliderContainer>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Item>
                <HerosContainer>
                  <Image src={item.img} alt={item.img} />
                  <ContentContainer>
                    <ItemTitle> {item.title} </ItemTitle>
                    <Desc>{item.desc}</Desc>
                    <Button onClick={() => handleDetail(item.id)}>
                      Read more
                    </Button>
                  </ContentContainer>
                </HerosContainer>
              </Item>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {openPopUp && (
        <PopUp>
          <PopUpContainer>
            <ClosePopUpContainer>
              <PopUpTitle>{details.title}</PopUpTitle>
              <AiOutlineClose style={closeStyle} onClick={handleDetail} />
            </ClosePopUpContainer>
            <PopUpImage src={details.img} alt={details.img} />
            <InfosContainer>
              <InfoText>{details.infos}</InfoText>
              <PopUpButton>
                <Download
                  href={details.music}
                  target="_blank"
                  downloaad={details.music}
                >
                  explore or visit
                </Download>
              </PopUpButton>
            </InfosContainer>
          </PopUpContainer>
        </PopUp>
      )}
    </Container>
  );
};

export default Works;
