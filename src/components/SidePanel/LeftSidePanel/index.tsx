import UserIcon from "../../../assets/icons/user-icon"
import WalletIcon from "../../../assets/icons/wallet-icon"
import { LeftPanelItem, LeftPanelWrapper } from "./styles"

const LeftSidePanel = () => {
    return (
        <LeftPanelWrapper data-testid="leftsidepanel">
            <LeftPanelItem active>
                <UserIcon />
                Endorsements
            </LeftPanelItem>
            <LeftPanelItem>
                <WalletIcon />
                CD Accounts
            </LeftPanelItem>
      </LeftPanelWrapper>
    )
}

export default LeftSidePanel