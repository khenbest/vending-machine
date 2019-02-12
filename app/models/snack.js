import VendingMachine from "./vendingMachine.js";




export default class Snack {
    constructor(name, price, location, img) {
        this.name = name
        this.price = price
        this.location = location
        this.img = img

    }
    makeCard() {
        return `
        <div class="col-4">
            <div class="card">
                <img src="${this.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.price}</p>
                    <button class="btn" id="snack-btn">${this.location}</button>
                </div>
            </div>
        </div>`
    }
}

// function makeCard() {
//     debugger
//     let template = '';
//     template += `<div id="snacks" class="card-group d-flex ">`
//     template += `<div class="card">`
//     template += `<img src="${this.img}" class="card-img-top">`
//     template += `<div class="card-body">`
//     template += `<h5 class="card-title"> snackname/h5>`
//     template += `<p class="card-text"> snackprice /p>`
//     template += `<button id="A1" onclick="vend()">A_ <span> </span></button>`
//     template += `</div>`
//     document.getElementById('snacks').innerHTML = template;
// }




{/* flex-column border text-center border-light rounded */ }
