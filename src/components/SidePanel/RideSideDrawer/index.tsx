import React from 'react';
import { RightDrawerClaimInfo, RightDrawerClaimInfoButton, RightDrawerClaimInfoDescription, RightDrawerClaimInfoTitle, RightDrawerContainer, RightDrawerContent, RightDrawerInsuranceDetails, RightDrawerInsuranceImage, RightDrawerInsuranceRow, RightDrawerInsuranceSubtitle, RightDrawerInsuranceTitle, RightDrawerNavRow, RightDrawerNavRowIconWrapper, RightDrawerNavRowLeft, RightDrawerNavRowRight, RightDrawerWrapper } from './styles';
import CloseIcon from '../../../assets/icons/close-icon';
import DangerIcon from '../../../assets/icons/danger-icon';
import ChevronRight from '../../../assets/icons/chevron-right';

interface RightSideDrawerProps {
    isOpen: boolean;
    toggleDrawer: () => void;
}

const RightSideDrawer: React.FC<RightSideDrawerProps> = ({isOpen: isDrawerOpen, toggleDrawer}: RightSideDrawerProps) => {
  return (
      <RightDrawerWrapper isOpen={isDrawerOpen}>
        <RightDrawerContainer>
          <RightDrawerNavRow>
            <RightDrawerNavRowLeft>
              <RightDrawerNavRowIconWrapper>
                <DangerIcon />
              </RightDrawerNavRowIconWrapper>
              <span>02 Alerts</span>
            </RightDrawerNavRowLeft>
            <RightDrawerNavRowRight onClick={toggleDrawer}>
              <CloseIcon />
            </RightDrawerNavRowRight>
          </RightDrawerNavRow>

          <RightDrawerContent>
            <RightDrawerInsuranceRow>
              <RightDrawerInsuranceImage src="images/go-digit.png" alt="insurance" />
              <RightDrawerInsuranceDetails>
                <RightDrawerInsuranceTitle>Group Medical Insurance</RightDrawerInsuranceTitle>
                <RightDrawerInsuranceSubtitle>Loop GMC Policy</RightDrawerInsuranceSubtitle>
              </RightDrawerInsuranceDetails>
            </RightDrawerInsuranceRow>
            <RightDrawerClaimInfo>
              <RightDrawerClaimInfoTitle>3 Claims Under Query!</RightDrawerClaimInfoTitle>
              <RightDrawerClaimInfoDescription>Documentation pending from employee</RightDrawerClaimInfoDescription>
              <RightDrawerClaimInfoButton>View Claims <ChevronRight /></RightDrawerClaimInfoButton>

            </RightDrawerClaimInfo>
          </RightDrawerContent>
        </RightDrawerContainer>
      </RightDrawerWrapper>
  );
};

export default RightSideDrawer;
