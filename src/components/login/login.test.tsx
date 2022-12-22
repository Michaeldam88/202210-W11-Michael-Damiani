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

        // test(`Then component should render access button`, () => {
        //     const elementButton = screen.getByRole('button');
        //     expect(elementButton).toBeInTheDocument();
        // });

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
