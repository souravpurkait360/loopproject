import { IStore } from "../../types/store";

export const selectRightSideDrawerIsOpen = (state: IStore) => state.drawer.rightSideDrawer.isOpen;