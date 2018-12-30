import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
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
  @ViewChild('listForm') slForm: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  indexItemToEdit: number;
  editedIngridient: Ingridient;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppinglistService.startEditing.subscribe((index: number) => {
      this.editMode = true;
      this.indexItemToEdit = index;
      this.editedIngridient = this.shoppinglistService.getIngridient(index);
      this.slForm.setValue({
        name: this.editedIngridient.name,
        amount: this.editedIngridient.amount
      });
    })
  }

  createIngridient(listForm: NgForm) {
    console.log(listForm);
    if (this.editMode) {
      this.shoppinglistService.updateIngridient(this.indexItemToEdit , listForm.value);
    } else {
      this.shoppinglistService.addIngridient(listForm.value);
    }
    this.editMode = false;
    listForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppinglistService.deleteIngridient(this.indexItemToEdit);
    this.onClear();
  }
}
