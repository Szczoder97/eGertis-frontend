export class UserDto {
    constructor(public id: number, public email:string,
        public name: string, public surname: string, public role: string){}
}