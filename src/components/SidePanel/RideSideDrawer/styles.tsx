import styled from 'styled-components';

export const RightDrawerWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-25vw')};
  width: 25vw;
  max-width: 450px;
  height: 100%;
  background-color: #eee;
  z-index: 100;
  transition: right 0.3s ease-in-out;
`;