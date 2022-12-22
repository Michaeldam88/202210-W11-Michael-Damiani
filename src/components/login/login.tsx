import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';

export function Login() {
    const userData = JSON.parse(sessionStorage.getItem('userData') as string);

    const [loginData, setloginData] = useState({
        username: '',
        password: '',
    });
    const [loginMessage, setLoginMessage] = useState('');

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setloginData({ ...loginData, [element.name]: element.value });
    };

    const login = () => {
        if (
            loginData.username === userData.username &&
            loginData.password === userData.password
        ) {
            setLoginMessage('Bienvenido');
        } else {
            setLoginMessage('Usuario o contraseña incorrectos');
        }
    };
    return (
        <section className="login">
            <h2 className="login__title">Login</h2>
            <input
                className="login__input"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                onInput={handleInput}
                required
            />
            <input
                className="login__input"
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                onInput={handleInput}
                required
            />
            <div className="add-data__button-container">
                <Link to={'/confirmation'}>
                    <button className="login__button">Atras</button>
                </Link>
                <button className="login__button" onClick={login}>
                    Entrar
                </button>
            </div>
            <p className="add-data__error-message">{loginMessage}</p>
        </section>
    );
}
