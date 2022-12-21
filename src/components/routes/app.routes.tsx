import { Navigate, Route, Routes } from 'react-router-dom';
import { AccesData } from '../accesData/accesData';
import { Confirmation } from '../confirmation/confirmation';
import { Login } from '../login/login';
import { Registration } from '../registration/registration';

export function AppRoutes() {
    return (
        <Routes>
            <Route path={''} element={<Registration></Registration>}></Route>
            <Route
                path={'/registration'}
                element={<Registration></Registration>}
            ></Route>
            <Route
                path={'/acces-data'}
                element={<AccesData></AccesData>}
            ></Route>
            <Route
                path={'/confirmation'}
                element={<Confirmation></Confirmation>}
            ></Route>
            <Route path={'/login'} element={<Login></Login>}></Route>
            <Route
                path={'*'}
                element={<Navigate to="" replace></Navigate>}
            ></Route>
        </Routes>
    );
}
