import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { accesType } from '../../types/accesType';

export function AccesData() {
    const initialAccesData: accesType = {
        username: '',
        password: '',
        accountType: '',
    };

    const [passwordMessage, setPasswordMessage] = useState('');

    const [accesData, setAccesData] = useState(initialAccesData);
    const [correctPassword, setCorrectPassword] = useState(false);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setAccesData({ ...accesData, [element.name]: element.value });
    };

    const checkCorrectPasw = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        //setAccesData({ ...accesData, [element.name]: element.value });
        if (element.value === accesData.password) {
            setPasswordMessage('');
            setCorrectPassword(true);
        } else {
            setPasswordMessage('Las contraseñas no coinciden');
            setCorrectPassword(false);
        }
    };

    const navigate = useNavigate();

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        if (correctPassword) {
            const userData = JSON.parse(
                sessionStorage.getItem('userData') as string
            );
            sessionStorage.setItem(
                'userData',
                JSON.stringify({ ...userData, ...accesData })
            );

            setAccesData(initialAccesData);
        } else {
            alert('Corrige la contraseña');
        }

        navigate('/confirmation');
    };

    return (
        <section>
            <h2 className="container__title">Datos de acceso</h2>
            <form className="add-data" onSubmit={handleSubmit}>
                <div className="add-data__input-container">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Escribe tu User Name"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="add-data__input-container">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        minLength={4}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Escribe tu contraseña"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="add-data__input-container">
                    <label htmlFor="confirmPassword">
                        Confirma tu contraseña
                    </label>
                    <input
                        minLength={4}
                        type="Password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Escribe de nuevo la contraseña"
                        onInput={checkCorrectPasw}
                        required
                    />
                    <p className="add-data__error-message">
                        {passwordMessage}
                    </p>
                </div>
                <div className="add-data__input-container">
                    <label htmlFor="accountType">
                        Selecciona el tipo de Cuenta
                    </label>
                    <select
                        required
                        name="accountType"
                        id="accountType"
                        onInput={handleInput}
                    >
                        <option value="">--Seleccione una opción--</option>
                        <option value="Personal">Personal</option>
                        <option value="Pro">Pro</option>
                        <option value="Business">Business</option>
                    </select>
                </div>
                <div className="add-data__button-container">
                    <Link to={'/register'}>
                        <button className="add-data__button">Atras</button>
                    </Link>
                    <button className="add-data__button" type="submit">
                        Next
                    </button>
                </div>
            </form>
        </section>
    );
}
