import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import LeftSidePanel from './components/SidePanel/LeftSidePanel';
import RightSideDrawer from './components/SidePanel/RideSideDrawer';
import EndorsementsPage from './pages/EndorsementsPage';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 70px 1fr;
  height: 100vh;
`;

const MainBody = styled.div`
  grid-column: 2;
  padding: 0px 40px;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;
const RightDrawerButton = styled.button`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  z-index: 101;
`;

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Container>
      <NavBar />
      <LeftSidePanel />
      <MainBody>
        <EndorsementsPage />
      </MainBody>
      <RightSideDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Overlay isOpen={isDrawerOpen} onClick={toggleDrawer} />
      <RightDrawerButton onClick={toggleDrawer}>Open Drawer</RightDrawerButton>
    </Container>
  );
};

export default App;
