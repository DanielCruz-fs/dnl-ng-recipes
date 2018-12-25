import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.css']
})
export class RecipeModalComponent implements OnInit {
  @Input() modalTitle: string;
  constructor() { }

  ngOnInit() {
  }

  onCreateMode(event: string): void {
    this.modalTitle = event;
  }

}
