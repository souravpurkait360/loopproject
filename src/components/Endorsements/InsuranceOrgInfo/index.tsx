import styled from 'styled-components';

const InsuranceOrgInfoWrapper = styled.div`
    display: flex;
`
const InsuranceOrgInfoLeftSection = styled.div`
    display: flex;
    width: 70%;
`
const InsuranceOrgInfoImage = styled.img`
    width: 50px;
    height: auto;
`
const InsuranceOrgTitle = styled.h2`
    font-size: 18px;
    font-weight: 500;
`
const InsuranceOrgDetails = styled.div`
    font-size: 16px;
    font-weight: 400;
    display: flex;
    gap: 10px;
    align-items: center;
`
const InsuranceOrgInfoDot = styled.div`
    height: 5px;
    width: 5px;
    background-color: #EEEEEE;
`
const InsuranceOrgInfoRightSection = styled.div`
    width: 30%;
`

const InsuranceOrgInfo = () => {
    return (
        <InsuranceOrgInfoWrapper>
            <InsuranceOrgInfoLeftSection>
                <InsuranceOrgInfoImage src="images/go-digit.png" />
                <div>
                    <InsuranceOrgTitle>Group Medical Insurance</InsuranceOrgTitle>
                    <InsuranceOrgDetails>
                        Go Digit
                        <InsuranceOrgInfoDot />
                        Loop GMC Policy
                        <InsuranceOrgInfoDot />
                        Policy No: XYZ-684-362-564
                    </InsuranceOrgDetails>
                </div>
            </InsuranceOrgInfoLeftSection>
        </InsuranceOrgInfoWrapper>
    )
}

export default InsuranceOrgInfo;