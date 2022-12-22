import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './login';

describe('Given Login Page component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Login></Login>
            </BrowserRouter>
        );
    });

    describe('When loaded it should render', () => {
        test(`The title`, () => {
            const title = screen.getByRole('heading', { name: 'Login' });
            expect(title).toBeInTheDocument();
        });
        test(`The username input`, () => {
            const usernInput = screen.getByPlaceholderText('Username');
            expect(usernInput).toBeInTheDocument();
        });

        test(`The password input`, () => {
            const passwInput = screen.getByPlaceholderText('Contraseña');
            expect(passwInput).toBeInTheDocument();
        });

        test(`The back button`, () => {
            const backButton = screen.getByRole('button', { name: 'Atras' });
            expect(backButton).toBeInTheDocument();
        });

        test(`The login button`, () => {
            const loginButton = screen.getByRole('button', { name: 'Entrar' });
            expect(loginButton).toBeInTheDocument();
        });

        // describe('When data are provided in the form', () => {
        //     const userData = loginDataMock;
        //     let inputUserElement: HTMLElement;
        //     let passwordInputElement: HTMLElement;
        //     let elementButton: HTMLElement;

        //     beforeEach(() => {
        //         inputUserElement = screen.getByRole('textbox'); // <input>
        //         passwordInputElement =
        //             screen.getByPlaceholderText('Contraseña'); // <input>
        //         elementButton = screen.getByRole('button');
        //     });

        //     test('User writes correct password', () => {
        //         userEvent.type(inputUserElement, userData.userName as string);
        //         expect(inputUserElement).toHaveValue(userData.userName);
        //         userEvent.type(
        //             passwordInputElement,
        //             userData.password as string
        //         );
        //         expect(passwordInputElement).toHaveValue(userData.password);
        //     });
        // });
    });
});
