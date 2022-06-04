export class ItemWrapper {
    constructor(public name: string, public quantity: number){}
}

export class UpdateOrder {
    constructor(public title: string, public products: ItemWrapper[]){}
}