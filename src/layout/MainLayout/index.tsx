import NavBar from "../../components/NavBar";
import LeftSidePanel from "../../components/SidePanel/LeftSidePanel";
import RightSideDrawer from "../../components/SidePanel/RideSideDrawer";
import { selectRightSideDrawerIsOpen } from "../../store/selectors/drawerSelector";
import { Container, MainBody, Overlay } from "./styles";
import { useSelector } from "react-redux";

const MainLayout : React.FC<{children: React.ReactNode}> = ({ children }) => {
    const isDrawerOpen = useSelector(selectRightSideDrawerIsOpen);
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