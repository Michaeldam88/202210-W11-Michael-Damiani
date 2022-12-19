import { useState } from 'react';
import { RegisterType } from '../../types/registerType';
import { Registration } from '../registration/registration';

export function App() {
    const initialState: Array<RegisterType> = [];

    const [tasks, setTasks] = useState(initialState);

    const handleAdd = function (task: RegisterType) {
        setTasks([...tasks, task]);
        console.log(task)
    };
    return (
        <div className="container">
            <Registration handleAdd={handleAdd}></Registration>
        </div>
    );
}
