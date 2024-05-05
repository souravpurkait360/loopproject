import styled from "styled-components";
import InsuranceOrgInfo from "../../components/Endorsements/InsuranceOrgInfo";
import Stepper from "../../components/Endorsements/Stepper";
import EndorsementDetails from "../../components/Endorsements/EndorsementDetails";
import EndorsementInfoLine from "../../components/Endorsements/EndorsementInfoLine";

const EndorsementsTopSection = styled.div`
    padding: 30px 60px;
`;
const EndorsementsBottomSection = styled(EndorsementsTopSection)`
    background-color: var(--white-2);
    min-height: 54vh;
`;


const EndorsementsPage = () => {
    return (
        <div>
            <EndorsementsTopSection>
                <InsuranceOrgInfo />
                <Stepper />
            </EndorsementsTopSection>
            <EndorsementsBottomSection>
                <EndorsementDetails />
                <EndorsementInfoLine />
            </EndorsementsBottomSection>
        </div>
    );
}

export default EndorsementsPage;