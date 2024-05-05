export interface IDrawerInitialState {
    rightSideDrawer: {
        isOpen: boolean;
    };
}

export interface IStore {
    drawer: IDrawerInitialState;
}