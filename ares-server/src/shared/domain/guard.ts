export class Guard {
    static againstNullOrUndefined(argument: any) {
        if (argument === null || argument === undefined) {
            throw new Error('Invalid argument');
        }
    }
}