import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Item } from './model/item';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';
  itemList!: Item[];
  showFooter = true;
  formGroup!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private todoService: TodoService){}

ngOnInit() {
  this.formGroup= this.fb.group({
    
  })
  this.todoService.getTotalItems$().subscribe((data: Item[]) => this.itemList = data);


}
  toggleFooter(){
    this.showFooter = !this.showFooter;
  }
}
