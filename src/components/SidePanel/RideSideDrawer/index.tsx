import React from 'react';
import { RightDrawerWrapper } from './styles';

interface RightSideDrawerProps {
    isOpen: boolean;
    toggleDrawer: () => void;
}

const RightSideDrawer: React.FC<RightSideDrawerProps> = ({isOpen: isDrawerOpen}: RightSideDrawerProps) => {
  return (
      <RightDrawerWrapper isOpen={isDrawerOpen}>
        Right Drawer
      </RightDrawerWrapper>
  );
};

export default RightSideDrawer;
