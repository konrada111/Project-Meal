import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../organism/Navigation/Navigation';
import { Wrapper } from './MainTemplate.style';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
