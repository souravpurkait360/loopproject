import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import NavBar from '.';
import store from '../../store';

describe('<NavBar />', () => {


    test('it should render the NavBar component', () => {
        render(
            <Provider store={store}>
                <NavBar />
            </Provider>
        );
        const navBarElement = screen.getByTestId('NavBar');
        expect(navBarElement).toBeInTheDocument();
    });

    test('it should render the logo image', () => {
        render(
            <Provider store={store}>
                <NavBar />
            </Provider>
        );
        const logoImageElement = screen.getByAltText('Loop Logo');
        expect(logoImageElement).toBeInTheDocument();
    });

    test('it should toggle the left panel when hamburger icon is clicked', () => {
        render(
            <Provider store={store}>
                <NavBar />
            </Provider>
        );
        const hamburgerIcon = screen.getByTestId('hamburger');
        fireEvent.click(hamburgerIcon);
    });

    test('it should toggle the right side drawer when alert box is clicked', () => {
        render(
            <Provider store={store}>
                <NavBar />
            </Provider>
        );
        const alertBox = screen.getByTestId('alert-button');
        fireEvent.click(alertBox);
    });
});