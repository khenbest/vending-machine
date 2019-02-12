import VendingController from "./components/vendingController.js";

class App {
    constructor() {
        this.controllers = {
            vendingController: new VendingController()
        }
    }
}


window.app = new App()