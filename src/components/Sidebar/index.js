import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SidebarMenu, SideBarLink, SideBtnWrap, SideBarRoute } from './SidebarElements';
const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SidebarMenu>
          <SideBarLink to="about">About</SideBarLink>
          <SideBarLink to="discover">Discover</SideBarLink>
          <SideBarLink to="services">Services</SideBarLink>
          <SideBarLink to="signup">Sign Up</SideBarLink>
          <SideBtnWrap>
            <SideBarRoute to="/signin">Sign In</SideBarRoute>
          </SideBtnWrap>
        </SidebarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
