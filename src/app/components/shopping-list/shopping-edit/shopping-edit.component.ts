import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingridient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingridient: Ingridient = { name: null, amount: null };
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  createIngridient() {
    this.shoppinglistService.addIngridient(this.ingridient);
    console.log(this.ingridient);
    this.ingridient = { name: null, amount: null };
  }

}
