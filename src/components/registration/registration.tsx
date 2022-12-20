import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Register, RegisterType } from '../../types/registerType';

export function Registration() {
    const initialState: Array<RegisterType> = [];

    const [registers, setRegister] = useState(initialState);

    const handleAdd = function (register: RegisterType) {
        setRegister([...registers, register]);
    };

    const initialFormData: Partial<RegisterType> = {
        name: '',
        lastName: '',
        birthDate: 0,
        gender: '',
        email: '',
        newsletter: true,
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleChange = () => {
        setFormData({ ...formData, newsletter: !formData.newsletter });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        console.log(registers);
        ev.preventDefault();
        handleAdd(
            new Register(
                formData.name as string,
                formData.lastName as string,
                formData.birthDate as number,
                formData.gender as string,
                formData.email as string
            )
        );
        setFormData(initialFormData);
    };

    return (
        <section>
            <form className="add-data" onSubmit={handleSubmit}>
                <div>
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
                <div>
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
                <div>
                    <label htmlFor="birthDate">Año de nacimiento</label>
                    <input
                        type="date"
                        name="birthDate"
                        id="birthDate"
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="gender">Genero</label>
                    <input
                        type="radio"
                        id="hombre"
                        name="gender"
                        value="hombre"
                        onInput={handleInput}
                        required
                    />
                    <label htmlFor="hombre">Hombre</label>
                    <input
                        type="radio"
                        id="mujer"
                        name="gender"
                        value="mujer"
                        onInput={handleInput}
                        required
                    />
                    <label htmlFor="mujer">Mujer</label>
                    <input
                        type="radio"
                        id="reservado"
                        name="gender"
                        value="reservado"
                        onInput={handleInput}
                        required
                    />
                    <label htmlFor="reservado">Prefiero no indicarlo</label>
                </div>
                <div>
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
                <div>
                    <label htmlFor="newsletter">
                        Suscribete a nuestra newsletter
                    </label>
                    <input
                        type="checkbox"
                        name="newsletter"
                        id="newsletter"
                        checked={!formData.newsletter}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button>Back</button>
                    <Link
                        to={'/acces-data'}
                        onClick={(e) => e.preventDefault()}
                    >
                        <button type="submit">Next</button>
                    </Link>
                </div>
            </form>
        </section>
    );
}
