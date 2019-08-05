import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

  

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(){
    this.shoppinglistService.onAddToList({name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value});
  }

}
