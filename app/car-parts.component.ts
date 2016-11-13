import { Component } from '@angular/core';
import { carPart } from './car-part';
import { CARPARTS } from './mocks'
@Component({
    selector: 'car-parts',
    templateUrl: 'app/car-parts.component.html',
    styleUrls: ['app/car-parts.component.css']

})
export class CarPartsComponent {
    carParts: carPart[];
    ngOnInit() {
        this.carParts = CARPARTS;

    }
    upQuantity(carPart) {

        if (carPart.quantity < carPart.inStock)
            carPart.quantity++;
    }
    downQuantity(carPart) {

        if (carPart.quantity != 0)
            carPart.quantity--;
    }
    totalCarParts() {
        // let sum = 0;
        // for (let carPart of this.carParts) {
        //   sum += carPart.inStock;
        // }
        return this.carParts.reduce(function (prev, current) { return prev + current.inStock; }, 0)
    }
    showKey(event) {
        alert(event.keyCode);

    }
    getCoord(event){

        console.log(event.clientX+","+event.clientY);
    }
}