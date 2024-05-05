import MoneyIcon from "../../../assets/icons/money-icon";
import HumanFaceIcon from "../../../assets/icons/human-face-icon";
import {
    EndorsementDetailsCard,
    EndorsementDetailsCardLine,
    EndorsementDetailsCardRowMajor,
    EndorsementDetailsCardRowMinor,
    EndorsementDetailsColumn,
    EndorsementDetailsContainer,
    EndorsementDetailsTitle,
    EndorsementDetailsTitleIconWrapper,
    H2,
    H3
} from "./styles";

const EndorsementDetails = () => {
    return (
        <EndorsementDetailsContainer>
            <EndorsementDetailsColumn>
                <EndorsementDetailsTitle>
                    <EndorsementDetailsTitleIconWrapper>
                        <MoneyIcon />
                    </EndorsementDetailsTitleIconWrapper>
                    <span>Endorsement Details</span>
                </EndorsementDetailsTitle>
                <EndorsementDetailsCard>
                    <EndorsementDetailsCardRowMajor>
                        <span>Total Cost (Deductions - Refund)</span>
                        <H2>₹1,00,000</H2>
                    </EndorsementDetailsCardRowMajor>
                    <EndorsementDetailsCardLine />
                    <EndorsementDetailsCardRowMinor>
                        <span>Cost of Additions</span>
                        <H3>₹1,00,000</H3>
                    </EndorsementDetailsCardRowMinor>
                </EndorsementDetailsCard>
            </EndorsementDetailsColumn>

            <EndorsementDetailsColumn>
                <EndorsementDetailsTitle>
                    <EndorsementDetailsTitleIconWrapper>
                        <HumanFaceIcon />
                    </EndorsementDetailsTitleIconWrapper>
                    <span>Life Count</span>
                </EndorsementDetailsTitle>
                <EndorsementDetailsCard>
                    <EndorsementDetailsCardRowMajor>
                        <span>Total Life Count</span>
                        <H2>100</H2>
                    </EndorsementDetailsCardRowMajor>
                    <EndorsementDetailsCardLine />
                    <EndorsementDetailsCardRowMinor>
                        <span>No. of Additions (2 New Lives)</span>
                        <H3>100</H3>
                    </EndorsementDetailsCardRowMinor>
                </EndorsementDetailsCard>

            </EndorsementDetailsColumn>
        </EndorsementDetailsContainer>
    )
}

export default EndorsementDetails;