import styled from 'styled-components';
import { list } from '../../../public/data/data';
import PortfolioList from './portfolioList/PortfolioList';
import { useEffect, useState } from 'react';

import {
  webPortfolio,
  videoPortfolio,
  featuredPortfolio,
  designPortfolio,
} from '../../../public/data/data';
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem 2rem;
  background-color: #212122;
  color: white;
  @media (max-width: 550px) {
    padding: 5rem 2rem;
  }
`;
const TitleContent = styled.h1`
  font-size: 4rem;
  @media (max-width: 420px) {
    font-size: 2.5rem;
  }
`;
const Ul = styled.ul`
  margin: 0.8rem;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 2rem 2rem;
  width: 100%;
`;
const ItemsContainer = styled.div`
  width: 22rem;
  height: 17rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    border: 4px solid white;
    width: 23rem;
    background-color: black;
  }
  @media (max-width: 1584px) {
    width: 20rem;
    &:hover {
      border: 4px solid white;
      width: 22rem;
      background-color: black;
    }
  }
  @media (max-width: 1460px) {
    width: 18rem;
    &:hover {
      border: 4px solid white;
      width: 20rem;
      background-color: black;
    }
  }
  @media (max-width: 1328px) {
    width: 16rem;
    &:hover {
      border: 4px solid white;
      width: 18rem;
      background-color: black;
    }
  }
  @media (max-width: 1200px) {
    width: 14rem;
    &:hover {
      border: 4px solid white;
      width: 16rem;
      background-color: black;
    }
  }
  @media (max-width: 600px) {
    width: 12.5rem;
    &:hover {
      border: 4px solid white;
      width: 13rem;
      background-color: black;
    }
  }
  @media (max-width: 550px) {
    width: 16rem;
    &:hover {
      border: 4px solid white;
      width: 18rem;
      background-color: black;
    }
  }
`;
const Image = styled.img`
  width: 22rem;
  height: 17rem;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
  z-index: 1;
  &:hover {
    border: 4px solid white;
    width: 23rem;
    opacity: 0.25;
  }
  @media (max-width: 1584px) {
    width: 20rem;
    &:hover {
      border: 4px solid white;
      width: 22rem;
      background-color: black;
    }
  }
  @media (max-width: 1460px) {
    width: 18rem;
    &:hover {
      border: 4px solid white;
      width: 20rem;
      background-color: black;
    }
  }
  @media (max-width: 1328px) {
    width: 16rem;
    &:hover {
      border: 4px solid white;
      width: 18rem;
      background-color: black;
    }
  }
  @media (max-width: 1200px) {
    width: 14rem;
    &:hover {
      border: 4px solid white;
      width: 16rem;
      background-color: black;
    }
  }
  @media (max-width: 600px) {
    width: 12.5rem;
    &:hover {
      border: 4px solid white;
      width: 13rem;
      background-color: black;
    }
  }
  @media (max-width: 550px) {
    width: 16rem;
    &:hover {
      border: 4px solid white;
      width: 18rem;
      background-color: black;
    }
  }
`;
const ItemTitle = styled.h3`
  position: absolute;
  margin: 0;
`;
const Title = styled.p`
  padding: 2rem;
  font-size: 1.25rem;
  text-align: center;
  @media (max-width: 550px) {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;
// const Video = styled.video`
//   position: absolute;
// `;
// const Source = styled.source``;

const Portfolio = () => {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'video':
        setData(videoPortfolio);
        break;
      case 'design':
        setData(designPortfolio);
        break;
      default:
        setData(designPortfolio);
    }
  }, [selected]);
  return (
    <Container id="portfolio">
      <TitleContent>PORTFOLIO</TitleContent>
      <Title>
        I design and develop services for customers of all sizes, specializing
        in creating stylish, modern websites, web services and online stores.
      </Title>
      <Ul>
        {list.map((item) => {
          return (
            <PortfolioList
              title={item.title}
              key={item.id}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </Ul>
      <ContainerItems>
        {data.map((doc) => {
          return (
            <ItemsContainer key={doc.id}>
              <Image src={doc.img} alt={doc.img} />
              <ItemTitle>{doc.title}</ItemTitle>
              {/* <Video controls>
                <Source src={doc.video} type={doc.video} />
              </Video> */}
            </ItemsContainer>
          );
        })}
      </ContainerItems>
    </Container>
  );
};

export default Portfolio;
