import VendingService from "./vendingService.js";
import VendingMachine from "../models/vendingMachine.js";

let vendingService = new VendingService()
function draw() {
    let snackDictionary = vendingService.snacks
    let template = '';
    for (let key in snackDictionary) {
        let snack = snackDictionary[key];
        template += snack.makeCard();
    }
    document.getElementById('snacks').innerHTML = template
}

export default class VendingController {
    constructor() {
        console.log('controllllla')
        draw()
    }
    addDollar() {
        _vm.balance += 1


    }
    addQuarter() {
        _vm.balance += .25

    }

}