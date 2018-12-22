import { Component, OnInit } from '@angular/core';
import { Ingridient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[] = [
    new Ingridient('apples', 56),
    new Ingridient('tomatoes', 6)
  ];
  constructor() { }

  ngOnInit() {
  }

}
