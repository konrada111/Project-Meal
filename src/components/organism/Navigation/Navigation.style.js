import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  position: absolute;
  margin-top: 15px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #282c34;
  padding: 40px;
`;
