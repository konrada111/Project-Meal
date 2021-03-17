import styled from 'styled-components';
import img from '../../../assets/images/recipesLandingPage.png';

export const Wrapper = styled.div`
  background: url(${img}) center no-repeat;
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  grid-template-rows: 1fr 1fr 0.1fr 1fr;
  justify-items: center;
  align-items: center;
`;

export const Header = styled.h1`
  max-width: 1062px;
  height: 304px;
  font-size: 114px;
  grid-row-start: 2;
  grid-column-start: 2;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
export const ButtonMore = styled.button`
  padding: 10px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 142px;
  height: 45px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: white;
  border-radius: 25px;
  border: none;
  grid-row-start: 3;
  grid-column-start: 2;
`;
