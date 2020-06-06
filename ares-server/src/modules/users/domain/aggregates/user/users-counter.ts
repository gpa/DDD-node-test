export interface IUsersCounter {
    countUsersWithName(name: string): Promise<Number>;
    countUsersWithEmail(email: string): Promise<Number>;
}