import styled from 'styled-components';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';
import { testimonials } from '../../../public/data/data';
const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #27272a;
  padding: 10rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 550px) {
    padding: 8rem 1rem;
  }
`;
const TestimonialsTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 4rem;
  color: white;
  @media (max-width: 650px) {
    font-size: 3rem;
  }
  @media (max-width: 550px) {
    font-size: 2.5rem;
  }
  @media (max-width: 360px) {
    font-size: 2rem;
  }
`;
const TestimonialsSubTitle = styled.span`
  text-align: center;
  font-size: 1.25rem;
  color: white;
  text-align: center;
`;
const TestimonialContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;
const Image = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px,
    rgba(0, 0, 0, 0.2) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;
const Name = styled.h2``;
const Testimonial = styled.p`
  font-weight: 300;
  @media (max-width: 485px) {
    padding: 0 2rem;
  }
  @media (max-width: 405px) {
    padding: 0 4rem;
  }
  @media (max-width: 405px) {
    padding: 0 6rem;
  }
  @media (max-width: 280px) {
    padding: 0 8rem;
  }
`;
const Description = styled.span`
  font-weight: bold;
`;
const Company = styled.span``;

const Testimonials = () => {
  return (
    <Container id="testimonials">
      <TestimonialsTitle>Testimonials</TestimonialsTitle>
      <TestimonialsSubTitle>What the clients say</TestimonialsSubTitle>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={1}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((test) => {
          return (
            <SwiperSlide key={test.id}>
              <TestimonialContainer>
                <Image src={test.image} alt={test.image} />
                <Name>{test.name}</Name>
                <Company>{test.company}</Company>
                <Description>{test.designation}</Description>
                <Testimonial>{test.testimonial}</Testimonial>
              </TestimonialContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Testimonials;
