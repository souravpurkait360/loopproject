import styled from "styled-components";
import MoneyIcon from "../../../assets/icons/money-icon";
import HumanFaceIcon from "../../../assets/icons/human-face-icon";

export const EndorsementDetailsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
`;
export const EndorsementDetailsColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
`;
export const EndorsementDetailsTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.875rem;
    font-weight: 500;
`
export const EndorsementDetailsTitleIconWrapper = styled.div`
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--lavender);
    border-radius: 50%;
`
export const EndorsementDetailsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--white);
    margin-top: 31px;
    padding: 1rem;
    border-radius: 12px;
`;
export const EndorsementDetailsCardRowMajor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    width: 100%;
    font-weight: 300;
`
export const EndorsementDetailsCardLine = styled.div`
    height: 1px;
    background-color: var(--gray);
    margin: 1rem 0;
    width: 100%;
`;
export const EndorsementDetailsCardRowMinor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    font-weight: 300;
    width: 100%;
`;
export const H2 = styled.span`
    font-weight: 400;
    font-size: 1.125rem;
`
export const H3 = styled.span`
    font-weight: 500;
    font-size: 0.875rem;
`

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