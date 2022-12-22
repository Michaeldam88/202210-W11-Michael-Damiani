import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Register, RegisterType } from '../../types/registerType';

export function Registration() {
    const initialFormData: Partial<RegisterType> = {
        name: '',
        lastName: '',
        gender: '',
        email: '',
        newsletter: 'no',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const [subscribed, setSubscribed] = useState(false);

    const handleChange = () => {
        setSubscribed(!subscribed);
        if (!subscribed) {
            setFormData({ ...formData, newsletter: 'Si' });
        } else {
            setFormData({ ...formData, newsletter: 'No' });
        }
    };

    const navigate = useNavigate();

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        localStorage.setItem(
            'userData',
            JSON.stringify(
                new Register(
                    formData.name as string,
                    formData.lastName as string,
                    formData.birthDate as number,
                    formData.gender as string,
                    formData.email as string,
                    formData.newsletter as string
                )
            )
        );

        navigate('/acces-data');
    };

    return (
        <section>
            <h2 className="container__title">Registrate</h2>
            <form className="add-data" onSubmit={handleSubmit}>
                <div className="add-data__input-container">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Escribe tu nombre"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="add-data__input-container">
                    <label htmlFor="lastName">Apellido</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Escribe tu apellido"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="add-data__input-container">
                    <label htmlFor="birthDate">Año de nacimiento</label>
                    <input
                        type="date"
                        name="birthDate"
                        id="birthDate"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="add-data__input-container">
                    <label htmlFor="gender">Genero</label>
                    <div className="add-data__input-container--radio">
                        <input
                            type="radio"
                            id="hombre"
                            name="gender"
                            value="Hombre"
                            onInput={handleInput}
                            required
                        />
                        <label htmlFor="hombre">Hombre</label>
                        <input
                            type="radio"
                            id="mujer"
                            name="gender"
                            value="Mujer"
                            onInput={handleInput}
                            required
                        />
                        <label htmlFor="mujer">Mujer</label>
                        <input
                            type="radio"
                            id="reservado"
                            name="gender"
                            value="Reservado"
                            onInput={handleInput}
                            required
                        />
                        <label htmlFor="reservado">Prefiero no indicarlo</label>
                    </div>
                </div>

                <div className="add-data__input-container">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Escribe tu correo electrónico"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div className="add-data__newsletter">
                    <label htmlFor="newsletter">
                        Suscribete a nuestra newsletter
                    </label>
                    <input
                        type="checkbox"
                        name="newsletter"
                        id="newsletter"
                        checked={subscribed}
                        onChange={handleChange}
                    />
                </div>
                <div className="add-data__button-container">
                    <button className="add-data__button" type="submit">
                        Next
                    </button>
                </div>
            </form>
        </section>
    );
}
