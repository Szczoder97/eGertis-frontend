export class Order {
    constructor(public id: number, public ownerId: number,
        public title: string, public creationDate: string,
        public isRealized: boolean){}
}