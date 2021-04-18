import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './Sidebar.style';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" exact>
            Home
          </SidebarLink>
          <SidebarLink to="/meal-plan">Meal Plan</SidebarLink>
          <SidebarLink to="/recipes">Recipes</SidebarLink>
          <SidebarLink to="page">Page</SidebarLink>
          <SidebarLink to="admin">Admin Panel</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
