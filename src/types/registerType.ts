export type RegisterType = {
    id: string;
    name: string;
    lastName: string;
    birthDate: number;
    gender: string;
    email: string;
    newsletter: boolean;
};

export class Register implements RegisterType {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        window.crypto?.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    id: string;
    newsletter: boolean;
    constructor(
        public name: string,
        public lastName: string,
        public birthDate: number,
        public gender: string,
        public email: string
    ) {
        this.id = Register.generateId();
        this.newsletter = false;
    }
}
