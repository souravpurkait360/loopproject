import React from 'react';
import { AlertBox, Hamburger, LeftSection, LogoImage, NavbarWrapper, RightSection } from './styles';
import AlertIcon from '../../assets/icons/alert-icon';

const NavBar: React.FC = () => {
  return (
      <NavbarWrapper>
        <LeftSection>
            <Hamburger>&#9776;</Hamburger>
            <div>
                <LogoImage src="images/loop-logo.png" />
            </div>
        </LeftSection>
        <RightSection>
            <AlertBox>
                Alerts
                <AlertIcon />
            </AlertBox>
        </RightSection>
      </NavbarWrapper>
  );
};

export default NavBar;
