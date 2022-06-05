export class Product {
    constructor(public id: number, public name: string, public quantity: number){}
}

export class OrderDetail {
    constructor(public id: number, public ownerId: number, public title: string,
        public creationDate: string, public products: Product[], public isRealized: boolean){}
}