import styled from 'styled-components';
import img from 'assets/images/mealLandingPage.png';

export const Wrapper = styled.div`
  background: url(${img}) center no-repeat;
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: grid;
  grid-template-columns: 0.2fr 1.2fr 1fr 0.1fr;
  grid-template-rows: 0.3fr 0.6fr 0.1fr 1fr;
  justify-items: center;
  align-items: center;
`;

export const Header = styled.h1`
  font-size: 96px;
  grid-row-start: 2;
  grid-column-start: 3;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
export const ButtonMore = styled.button`
  margin-top: 20px;
  padding: 10px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 172px;
  height: 45px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: white;
  border-radius: 25px;
  border: none;
  grid-row-start: 3;
  grid-column-start: 3;
`;
