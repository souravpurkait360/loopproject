import NavBar from "../../components/NavBar";
import LeftSidePanel from "../../components/SidePanel/LeftSidePanel";
import RightSideDrawer from "../../components/SidePanel/RideSideDrawer";
import { isMobile } from "../../helpers/resolution";
import { selectLeftSidePanelIsOpen, selectRightSideDrawerIsOpen } from "../../store/selectors/drawerSelector";
import { Container, MainBody, Overlay } from "./styles";
import { useSelector } from "react-redux";

const MainLayout : React.FC<{children: React.ReactNode}> = ({ children }) => {
    const isDrawerOpen = useSelector(selectRightSideDrawerIsOpen);
    const isLeftSidePanelOpen = useSelector(selectLeftSidePanelIsOpen);
    const isMobileDevice = isMobile();

    if(isMobileDevice) {
        return (
            <Container>
                <NavBar />
                {isLeftSidePanelOpen ? (
                    <LeftSidePanel />
                ) : isDrawerOpen ? (
                    <RightSideDrawer />
                ) : (
                    <MainBody>
                        {children}
                    </MainBody>
                )}
            </Container>
        );
    }
    
    return (
        <Container>
            <NavBar />
            <LeftSidePanel />
            <MainBody>
                {children}
            </MainBody>
            <RightSideDrawer />
            <Overlay isOpen={isDrawerOpen} />
        </Container>
    );
}

export default MainLayout;