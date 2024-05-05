import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 70px 1fr;
  height: 100vh;
`;

export const MainBody = styled.div`
  grid-column: 2;
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;
export const RightDrawerButton = styled.button`
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  z-index: 101;
`;
