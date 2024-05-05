import DownloadIcon1 from '../../../assets/icons/download-icon-1';
import {
    InsuranceOrgDetails,
    InsuranceOrgInfoDot,
    InsuranceOrgInfoDownloadButton,
    InsuranceOrgInfoImage,
    InsuranceOrgInfoLeftSection,
    InsuranceOrgInfoNameDetails,
    InsuranceOrgInfoRightSection,
    InsuranceOrgInfoWrapper,
    InsuranceOrgTitle
} from './styles';

const InsuranceOrgInfo = () => {
    return (
        <InsuranceOrgInfoWrapper>
            <InsuranceOrgInfoLeftSection>
                <InsuranceOrgInfoImage src="images/go-digit.png" />
                <InsuranceOrgInfoNameDetails>
                    <InsuranceOrgTitle>Group Medical Insurance</InsuranceOrgTitle>
                    <InsuranceOrgDetails>
                        Go Digit
                        <InsuranceOrgInfoDot />
                        Loop GMC Policy
                        <InsuranceOrgInfoDot />
                        Policy No: XYZ-684-362-564
                    </InsuranceOrgDetails>
                </InsuranceOrgInfoNameDetails>
            </InsuranceOrgInfoLeftSection>
            <InsuranceOrgInfoRightSection>
                <InsuranceOrgInfoDownloadButton>
                    <DownloadIcon1 />
                    Download member list
                </InsuranceOrgInfoDownloadButton>
            </InsuranceOrgInfoRightSection>
        </InsuranceOrgInfoWrapper>
    )
}

export default InsuranceOrgInfo;