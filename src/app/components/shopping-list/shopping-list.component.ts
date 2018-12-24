import { Component, OnInit } from '@angular/core';
import { Ingridient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[] = [];
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.ingridients = this.shoppinglistService.getIngridients();
  }

}
