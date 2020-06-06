import { ValidationError } from './validationError';

export class Guard {

    public static againstNullOrUndefined(value: any) {
        if (value === null || value === undefined) {
            throw new ValidationError('The given value must not be null or undefined.');
        }
    }

    public static againstInvalidEmail(email: string) {
        if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/))
            throw new ValidationError('The email address is not valid.');
    }

    public static againstInvalidToken(token: string) {
        if (token.match(/^(?!.*__)(?!.*_$)[A-Za-z]\w*$/))
            throw new ValidationError(`The given value can only contain underscores and alphanumeric characters.`
            + `It must begin with a letter, not include spaces, not end with an underscore,`
            + `and not contain two consecutive underscores.`);
    }

    public static againstWeakPassword(password: string) {
        if (password.length < 8)
            throw new ValidationError('The password is too short.');
        if (password.length > 255)
            throw new ValidationError('The password is too long.');
        if (password.length <= 15)
            if (!(/[0-9]/g.test(password)) || !(/[a-z]/g.test(password)))
                throw new ValidationError('The password must include a number and a lowercase letter, or be longer than 15 characters.')
    }
}