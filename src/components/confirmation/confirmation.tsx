import { Link } from "react-router-dom";

export function Confirmation() {
    const userData = JSON.parse(sessionStorage.getItem('userData') as string);

    return (
        <section>
            <h2 className="container__title">Resumen de tus datos</h2>
            <ul className="container__list">
                <li>Nombre: <p>{userData.name}</p></li>
                <li>Apellido: <p>{userData.lastName}</p></li>
                <li>Username: <p>{userData.username}</p></li>
                <li>Fecha de nacimiento: <p>{userData.birthDate}</p></li>
                <li>E-mail: <p>{userData.email}</p></li>
                <li>Género: <p>{userData.gender}</p></li>
                <li>Tipo de cuenta: <p>{userData.accountType}</p></li>
                <li>Suscrito a la newsletter: <p>{userData.newsletter}</p></li>
            </ul>
            <div className="add-data__button-container">
                <Link to={'/acces-data'}>
                    <button className="add-data__button">Atras</button>
                </Link>

                <Link to={'/login'}>
                    <button className="add-data__button">Next</button>
                </Link>
            </div>
        </section>
    );
}
