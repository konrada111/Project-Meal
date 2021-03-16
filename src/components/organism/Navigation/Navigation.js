import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink, Wrapper, Navbar } from './Navigation.style';

const Navigation = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/meal-plan/">Meal Plan</StyledLink>
    </Wrapper>
  );
};

Navigation.propTypes = {};

export default Navigation;
