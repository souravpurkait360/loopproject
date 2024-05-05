import { createSlice } from '@reduxjs/toolkit'
import { IDrawerInitialState } from '../../types/store'

export const drawerInitialState: IDrawerInitialState = {
    rightSideDrawer: {
        isOpen: false,
    },
    leftSidePanel: {
        isOpen: false,
    },
}
const drawerSlice = createSlice({
  name: 'drawer',
  initialState: drawerInitialState,
  reducers: {
    toggleRightSideDrawer(state) {
      state.rightSideDrawer.isOpen = !state.rightSideDrawer.isOpen
    },
    toggleLeftSidePanel(state) {
        state.leftSidePanel.isOpen = !state.leftSidePanel.isOpen
    }
  },
})

export const { toggleRightSideDrawer, toggleLeftSidePanel } = drawerSlice.actions
export default drawerSlice.reducer