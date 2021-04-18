import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  position: absolute;
  margin-top: 15px;
`;

const activeClassName = 'active-link';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  color: #282c34;
  padding: 40px;

  &.active-link::after {
    content: '';
    height: 1px;
    width: 20px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    transform: translateX(-200%);
    position: absolute;
    top: 100%;
  }
`;
