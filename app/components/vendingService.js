import VendingMachine from "../models/vendingMachine.js";
import Snack from "../models/snack.js";


let _vm = new VendingMachine()

//private^
export default class VendingService {
    constructor() {
        let balance = 0
        console.log('vendingservice')
    }
    get snacks() {
        return _vm.snacksAvailable
    }
}


//MAINTAIN DATA AND MANIPULATION OF DATA-- SERVICES