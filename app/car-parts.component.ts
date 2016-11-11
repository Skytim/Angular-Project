import { Component } from '@angular/core';
@Component({
    selector: 'car-parts',
    templateUrl: 'app/car-parts.component.html',
    styleUrls:['app/car-parts.component.css']

})
export class CarPartsComponent {
    carParts = [{
        "id": 1,
        "name": "Super Tires",
        "description": "These tires",
        "inStock": 5,
        "price": 4.99
    }, {
        "id": 2,
        "name": "Reinforced Shocks",
        "description": "Shocks good",
        "inStock": 0,
        "price": 9.99
    }, {
        "id": 3,
        "name": "Reinforced Shocks",
        "description": "Shocks good",
        "inStock": 100,
        "price": 12
    }

    ];
    totalCarParts() {
        // let sum = 0;
        // for (let carPart of this.carParts) {
        //   sum += carPart.inStock;
        // }
        return this.carParts.reduce(function (prev, current) { return prev + current.inStock; }, 0)
    }
}