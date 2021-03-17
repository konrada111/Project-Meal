import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Header, ButtonMore } from './RecipesLandingPage.style';

const RecipesLandingPage = () => {
  return (
    <Wrapper>
      <Header>Let’s start cooking with popular recipes</Header>
      <ButtonMore>Get your recipes</ButtonMore>
    </Wrapper>
  );
};

RecipesLandingPage.propTypes = {};

export default RecipesLandingPage;
