import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
<p>There are {{totalCarParts()}} total parts in Stock</p>
<ul>
  <li *ngFor="let carPart of carParts">
    <h2>{{carPart.name|uppercase}}</h2>
    <p>{{carPart.description}}</p>
    <p>{{carPart.price|currency:'EUR':true}}</p>
    <p *ngIf="carPart.inStock >0 ">{{carPart.inStock}} in Stock</p>
    <p *ngIf="carPart.inStock ==0 ">Out of Stock</p>
  </li>
</ul>`

})
export class AppComponent {
  title = 'Ultra Up!';
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
