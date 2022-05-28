export class User {
    constructor(private token: string){}
    getToken(): string {
        return this.token;
    }
}