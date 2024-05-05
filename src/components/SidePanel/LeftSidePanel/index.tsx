import UserIcon from "../../../assets/icons/user-icon"
import WalletIcon from "../../../assets/icons/wallet-icon"
import { toggleLeftSidePanel } from "../../../store/slices/drawerSlice"
import { LeftPanelItem, LeftPanelWrapper } from "./styles"
import { useDispatch } from "react-redux"

const LeftSidePanel = () => {
    const dispatch = useDispatch();
    const toggleSidePanel = () => dispatch(toggleLeftSidePanel());
    return (
        <LeftPanelWrapper data-testid="leftsidepanel">
            <LeftPanelItem active onClick={toggleSidePanel}>
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