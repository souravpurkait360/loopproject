import React from 'react';
import { AlertBox, Hamburger, LeftSection, LogoImage, NavbarWrapper, RightSection } from './styles';
import AlertIcon from '../../assets/icons/alert-icon';
import { useDispatch } from 'react-redux';
import { toggleRightSideDrawer } from '../../store/slices/drawerSlice';

const NavBar: React.FC = () => {
    const dispatch = useDispatch();
    const toggleDrawer = () => dispatch(toggleRightSideDrawer());
    return (
        <NavbarWrapper>
        <LeftSection>
            <Hamburger>&#9776;</Hamburger>
            <div>
                <LogoImage src="images/loop-logo.png" />
            </div>
        </LeftSection>
        <RightSection>
            <AlertBox onClick={toggleDrawer}>
                Alerts
                <AlertIcon />
            </AlertBox>
        </RightSection>
        </NavbarWrapper>
    );
};

export default NavBar;
