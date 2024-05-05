import DownloadIcon2 from '../../../assets/icons/download-icon-2';
import SearchIcon from '../../../assets/icons/search-icon';
import ShareIcon from '../../../assets/icons/share-icon';
import ECardsIcon from '../../../assets/icons/e-cards-icon';
import DocsIcon from '../../../assets/icons/docs-icon';
import { Label, Line, Step, StepperContainer, StepperIconWrapper } from './styles';

const Stepper = () => {
    return (
        <StepperContainer>
            <Line />
            <Step>
                <StepperIconWrapper active>
                    <DownloadIcon2 />
                </StepperIconWrapper>
                <Label active>Data Submission</Label>
            </Step>
            <Step>
                <StepperIconWrapper>
                    <SearchIcon />
                </StepperIconWrapper>
                <Label>Review by Loop</Label>
            </Step>
            <Step>
                <StepperIconWrapper>
                    <ShareIcon />
                </StepperIconWrapper>
                <Label>Data sent to Insurer</Label>
            </Step>
            <Step>
                <StepperIconWrapper>
                    <DocsIcon />
                </StepperIconWrapper>
                <Label>UHID Generated</Label>
            </Step>
            <Step>
                <StepperIconWrapper>
                    <ECardsIcon />
                </StepperIconWrapper>
                <Label>E-Cards Received</Label>
            </Step>
        </StepperContainer>
    );
}

export default Stepper;