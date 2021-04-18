import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../organism/Navigation/Navigation';
import { Wrapper } from './MainTemplate.style';
import NavigationMenu from '../../organism/NavigationMenu/NavigationMenu';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <NavigationMenu />
      {children}
    </Wrapper>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
