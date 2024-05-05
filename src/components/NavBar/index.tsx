import React from 'react';
import { AlertBox, Hamburger, LeftSection, LogoImage, NavbarWrapper, RightSection } from './styles';
import AlertIcon from '../../assets/icons/alert-icon';
import { useDispatch } from 'react-redux';
import { toggleLeftSidePanel, toggleRightSideDrawer } from '../../store/slices/drawerSlice';

const NavBar: React.FC = () => {
    const dispatch = useDispatch();
    const toggleDrawer = () => dispatch(toggleRightSideDrawer());
    const toggleLeftPanel = () => dispatch(toggleLeftSidePanel());
    return (
        <NavbarWrapper data-testid="NavBar">
        <LeftSection>
            <Hamburger onClick={toggleLeftPanel} data-testid="hamburger">&#9776;</Hamburger>
            <div>
                <LogoImage src="images/loop-logo.png" alt="Loop Logo" />
            </div>
        </LeftSection>
        <RightSection>
            <AlertBox onClick={toggleDrawer} data-testid="alert-button">
                Alerts
                <AlertIcon />
            </AlertBox>
        </RightSection>
        </NavbarWrapper>
    );
};

export default NavBar;
