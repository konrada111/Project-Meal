import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Header, ButtonMore } from './MealPlanLandingPage.style';

const MealPlanLandingPage = () => {
  return (
    <Wrapper>
      <Header>Create your meal plan right here</Header>
      <ButtonMore>Get your meal plan</ButtonMore>
    </Wrapper>
  );
};

MealPlanLandingPage.propTypes = {};

export default MealPlanLandingPage;
