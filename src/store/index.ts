import { configureStore } from '@reduxjs/toolkit';
import drawerReducer from './slices/drawerSlice';

// Create the Redux store
const store = configureStore({
    reducer: {
        drawer: drawerReducer,
        // Add other reducers here if needed
    },
    devTools: process.env.NODE_ENV !== 'production',
});

// Export the state to be passed to the provider
export type RootState = ReturnType<typeof store.getState>;

// Set up the Redux Debugger
if (process.env.NODE_ENV === 'development' && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
    (window as any).__REDUX_DEVTOOLS_EXTENSION__.connect();
}

export default store;