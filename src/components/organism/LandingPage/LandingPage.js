import React from 'react';
import PropTypes from 'prop-types';
import { Header, Wrapper, Paragraph } from './LandingPage.style';
import { ButtonMore } from 'components/atoms/ButtonMore/ButtonMore';

const LandingPage = () => {
  return (
    <Wrapper>
      <Header>Hungry ? You’re in the right place</Header>
      <Paragraph>Find recipes and get your meal plan</Paragraph>
      <ButtonMore>Read More</ButtonMore>
    </Wrapper>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
