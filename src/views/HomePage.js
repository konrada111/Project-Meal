import React from 'react';
import PropTypes from 'prop-types';
import LandingPage from '../components/organism/LandingPage/LandingPage';
import RecipesLandingPage from '../components/organism/RecipesLandingPage/RecipesLandingPage';
import MealPlanLandingPage from '../components/organism/MealPlanLandingPage/MealPlanLandingPage';

const HomePage = () => {
  return (
    <>
      <LandingPage />
      <RecipesLandingPage />
      <MealPlanLandingPage />
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
