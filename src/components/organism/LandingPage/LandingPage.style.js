import styled from 'styled-components';
import img from 'assets/images/homePage.png';

export const Wrapper = styled.div`
  background: url(${img}) center no-repeat;
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: grid;
  grid-template-columns: 0.2fr 1.5fr 1fr;
  grid-template-rows: 1fr 1fr 0.1fr 1fr;
`;

export const Header = styled.h1`
  max-width: 1062px;
  height: 304px;
  font-size: 124px;
  grid-row-start: 2;
  grid-column-start: 2;
`;

export const Paragraph = styled.p`
  font-size: 30px;
  grid-row-start: 3;
  grid-column-start: 2;
`;
