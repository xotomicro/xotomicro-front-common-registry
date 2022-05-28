export class ValidationSystem {
    static validate<T extends object>(form: T, requiredFields: string[]) {
        let valid = true;
        for (let requiredField of requiredFields) {
            if (!form[requiredField]) {
                valid = false;
            }
        }
        return valid;
    }
}