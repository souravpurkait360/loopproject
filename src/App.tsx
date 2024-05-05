import React from 'react';
import EndorsementsPage from './pages/EndorsementsPage';
import MainLayout from './layout/MainLayout';
import store from './store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <EndorsementsPage />
        </MainLayout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
