import InfoIcon from "../../../assets/icons/info-icon";
import styled from "styled-components";

const EndorsementInfoLineContainer = styled.div`
    display: flex;
    font-size: 0.675rem;
    font-weight: 400;
    align-items: center;
    margin-top: 1rem;
    gap: 10px;
`

const EndorsementInfoLine = () => {
    return (
        <EndorsementInfoLineContainer>
            <InfoIcon />
            <div>All values are estimated figures, actual figures may slightly vary</div>
        </EndorsementInfoLineContainer>
    );
}

export default EndorsementInfoLine;