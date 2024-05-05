import { createSlice } from '@reduxjs/toolkit'
import { IDrawerInitialState } from '../../types/store'

export const drawerInitialState: IDrawerInitialState = {
    rightSideDrawer: {
        isOpen: false,
    }
}
const drawerSlice = createSlice({
  name: 'drawer',
  initialState: drawerInitialState,
  reducers: {
    toggleRightSideDrawer(state) {
        console.log({state});
        
      state.rightSideDrawer.isOpen = !state.rightSideDrawer.isOpen
    },
    // todoToggled(state, action) {
    //   const todo = state.find((todo) => todo.id === action.payload)
    //   todo.completed = !todo.completed
    // },
  },
})

export const { toggleRightSideDrawer } = drawerSlice.actions
export default drawerSlice.reducer