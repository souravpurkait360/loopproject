import styled from 'styled-components';

export const LeftPanelWrapper = styled.div`
  grid-column: 1;
  background-color: var(--teal);
  width: 20vw;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  @media (max-width: 768px) {
    width: 100vw;
    max-width: 100vw;
    transition: width 0.3s ease-in-out;
  }
`;

export const LeftPanelItem = styled.div<{active?: boolean}>`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  background-color: ${({ active }) => (active ? 'var(--light-teal)' : 'transparent')};
  border-left: 5px solid ${({ active }) => (active ? 'white' : 'transparent')};
  padding: 10px;
  padding-left: 30px;
  cursor: pointer;
  font-size: 0.675rem;
  color:  ${({ active }) => (active ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)')};
  svg {
    margin-right: 5px;
  }
`;