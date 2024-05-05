export interface IDrawerInitialState {
    rightSideDrawer: {
        isOpen: boolean;
    };
    leftSidePanel: {
        isOpen: boolean;
    };
}

export interface IStore {
    drawer: IDrawerInitialState;
}