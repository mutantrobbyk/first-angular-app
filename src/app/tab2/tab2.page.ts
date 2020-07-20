import { Component, ViewChild, ElementRef } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AddTodo, todosSelector } from '../state/todo.state';
import { Observable } from 'rxjs';
import { ITodoList } from '../tab1/todo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild("box", { static: false })
  input: ElementRef;
  @Select(todosSelector) todos$!: Observable<ITodoList>;
  constructor(public store: Store) {}
  addTodo(name: string): void {
    this.store.dispatch(new AddTodo({name, id: new Date().getTime()}))
    this.input.nativeElement.value = "";
  }
}
