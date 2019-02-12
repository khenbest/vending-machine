import Snack from "./snack.js";

export default class VendingMachine {
    constructor() {
        console.log('vendingmachine')
    }
    get snacksAvailable() {
        return _snackDictionary
    }
}

let doritos = new Snack('Doritos', 1.25, 'A1', 'doritos.jpg')
let cheetos = new Snack('Flamin\' Hot Cheetos', 1.25, 'A2', 'cheeots.jpg')
let fritos = new Snack('Honey BBQ Fritos', 1.25, 'A3', 'honebbq.jpg')

let _snackDictionary = {
    doritos,
    cheetos,
    fritos
}

