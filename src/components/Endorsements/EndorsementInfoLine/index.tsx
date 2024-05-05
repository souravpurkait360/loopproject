import InfoIcon from "../../../assets/icons/info-icon";
import { EndorsementInfoLineContainer } from "./styles";

const EndorsementInfoLine = () => {
    return (
        <EndorsementInfoLineContainer>
            <InfoIcon />
            <div>All values are estimated figures, actual figures may slightly vary</div>
        </EndorsementInfoLineContainer>
    );
}

export default EndorsementInfoLine;