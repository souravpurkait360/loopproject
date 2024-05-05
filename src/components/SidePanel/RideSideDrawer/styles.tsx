import styled from 'styled-components';

export const RightDrawerWrapper = styled.div<{ isOpen?: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-30vw')};
  width: 30vw;
  max-width: 450px;
  height: 100%;
  background-color: var(--white);
  z-index: 100;
  transition: right 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 100vw;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100vw')};
    transition: right 1s ease-in-out;
  }
`;

export const RightDrawerContainer = styled.div``;

export const RightDrawerNavRow = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.08);
`;
export const RightDrawerNavRowLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
`;
export const RightDrawerNavRowIconWrapper = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--yellow);
`
export const RightDrawerNavRowRight = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;
export const RightDrawerContent = styled.div`
  padding: 1rem 30px;
`;
export const RightDrawerInsuranceRow = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  gap: 10px;
`;
export const RightDrawerInsuranceImage = styled.img`
  height: 100%;
  width: auto;
  border-radius: 12px;
`;
export const RightDrawerInsuranceDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`
export const RightDrawerInsuranceTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
`;
export const RightDrawerInsuranceSubtitle = styled.div`
  font-size: 0.675rem;
  font-weight: 300;
`;
export const RightDrawerClaimInfo = styled.div`
  margin-top: 1rem;
  padding: 3vw;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: var(--thin-red);
  border-radius: 8px;
`
export const RightDrawerClaimInfoTitle = styled.div`
  color: var(--red);
  font-size: 0.75rem;
  font-weight: 500;
`
export const RightDrawerClaimInfoDescription = styled.div`
  font-size: 0.675rem;
  font-weight: 300;
  margin-top: 0.5rem;
`
export const RightDrawerClaimInfoButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  gap: 4px;
  margin-top: 1rem;
  background-color: var(--white);
  color: var(--teal);
  border: 1px solid var(--teal);
  padding: 0.5rem 0.6rem;
  border-radius: 8px;
  font-size: 0.675rem;
  font-weight: 400;
  cursor: pointer;
`