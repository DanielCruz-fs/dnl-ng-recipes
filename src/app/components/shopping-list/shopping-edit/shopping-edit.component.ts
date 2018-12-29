import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingridient } from 'src/app/models/ingredient.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode: boolean = false;
  indexItemToEdit: number;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppinglistService.startEditing.subscribe((index: number) => {
      console.log(index);
      this.editMode = true;
      this.indexItemToEdit = index;
    })
  }

  createIngridient(listForm: NgForm) {
    console.log(listForm);
    this.shoppinglistService.addIngridient(listForm.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
