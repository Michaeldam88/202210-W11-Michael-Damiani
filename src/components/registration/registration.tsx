import { SyntheticEvent, useState } from "react";
import { Register, RegisterType } from "../../types/registerType";

export function Registration({ handleAdd }: { handleAdd: (task: RegisterType) => void }) {
    const initialFormData: Partial<RegisterType> = {
        title: '',
        responsible: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (ev: SyntheticEvent) => {
        console.log('Input');
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleAdd(
            new Register(
                formData.title as string,
                formData.responsible ? formData.responsible : ''
            )
        );
        setFormData(initialFormData);
    };

    return (
        <section>
            <form className="add-data" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Name</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Escribe tu nombre"
                        value={formData.title}
                        onInput={handleInput}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Back</button>
                    <button type="submit">Next</button>
                </div>
            </form>
        </section>
    );
}
