import { Link } from "react-router-dom";

export function Confirmation() {
    const userData = JSON.parse(localStorage.getItem('userData') as string);

    return (
        <section>
            <h2>Resumen de tus datos</h2>
            <ul>
                <li>Nombre: {userData.name}</li>
                <li>Apellido: {userData.lastName}</li>
                <li>Username: {userData.username}</li>
                <li>Fecha de nacimiento: {userData.birthDate}</li>
                <li>E-mail: {userData.email}</li>
                <li>Género: {userData.gender}</li>
                <li>Tipo de cuenta: {userData.accountType}</li>
                <li>Suscrito a la newsletter: {userData.newsletter}</li>
            </ul>
            <div>
                <Link to={'/acces-data'}>
                    <button>Previous</button>
                </Link>

                <Link to={'/login'}>
                    <button>Confirmar</button>
                </Link>
            </div>
        </section>
    );
}
