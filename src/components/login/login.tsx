import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';

export function Login() {
    const userData = JSON.parse(localStorage.getItem('userData') as string);

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
            setLoginMessage('Usuario o contraseña incorrecto');
        }
    };
    return (
        <section>
            <h2>Login</h2>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                onInput={handleInput}
                required
            />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                onInput={handleInput}
                required
            />
            <Link to={'/confirmation'}>
                <button>Atras</button>
            </Link>
            <button onClick={login}>Entrar</button>
            <p>{loginMessage}</p>
        </section>
    );
}
