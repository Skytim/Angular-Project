import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
<ul>
  <li *ngFor="let carPart of carParts">
    <h2>{{carPart.name}}</h2>
    <p>{{carPart.description}}</p>
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
    "inStock": 5
  }, {
    "id": 2,
    "name": "Reinforced Shocks",
    "description": "Shocks good",
    "inStock": 0
  },{
    "id": 3,
    "name": "Reinforced Shocks",
    "description": "Shocks good",
    "inStock": 0
  }
  ]

}
