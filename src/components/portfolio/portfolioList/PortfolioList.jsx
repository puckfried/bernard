/* eslint-disable react/prop-types */
import styled from 'styled-components';
const Li = styled.li`
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  transition: all 0.5s ease-in-out;
  text-transform: uppercase;
  border-radius: 0.2rem;
  &:hover {
    border-bottom: 2.5px solid white;
  }
  @media (max-width: 1020px) {
    font-size: 1.25rem;
  }
  @media (max-width: 890px) {
    font-size: 1rem;
  }
  @media (max-width: 760px) {
    font-size: 0.8rem;
  }

  @media (max-width: 656px) {
    font-size: 0.6rem;
  }
  @media (max-width: 555px) {
    font-size: 0.55rem;
  }
  @media (max-width: 550px) {
    font-size: 1.25rem;
  }
  @media (max-width: 275px) {
    font-size: 1rem;
  }
`;

const PortfolioList = ({ id, title, active, setSelected }) => {
  const handleOpen = () => {
    setSelected(id);
  };
  return (
    <Li className={active ? 'active' : 'inActive'} onClick={handleOpen}>
      {title}
    </Li>
  );
};

export default PortfolioList;
