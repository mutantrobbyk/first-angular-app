import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TodoService, ITodoList } from "./todo.service";
import { Subject, Observable } from 'rxjs';

enum ValList {
  ONE,
  TWO,
}

type OptionList = "one" | "two";

interface B {
  time: number;
}

interface Contact extends CommonRecord {
  first_name: string;
}

interface Job extends CommonRecord {
  name: string;
}

interface CommonRecord {
  id: string;
  type: string;
  date_created: string;
}

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  TodoList: Observable<ITodoList>;
  @ViewChild("box", { static: false })
  input: ElementRef;
  
  constructor(public todo: TodoService) {}
  ngOnInit(): void {
    this.TodoList = this.todo.todoStream;
  }
  addTodo(name: string): void {
    this.todo.todoActionHandler({type:'add', payload: {name, id: new Date().getTime()}});
    this.input.nativeElement.value = "";
  }
  // bind remove function
  removeTodo(index: number): void {
    this.todo.removeTodo(index);
  }
  editTodo(event: {target: {value: string}}, index: number): void {
    this.todo.editTodo(event.target.value, index);
  }
  test<T extends B>(a: number, b: T): T {
    return b;
  }

  handleChange<T extends CommonRecord>(v: T): T {
    return v;
  }

  reactToThing(j: Job, c: Contact) {
    this.handleChange<Contact>(c);
    this.handleChange<Job>(j);
    this.pickOption("id");
  }

  pickOption(contactField: keyof Contact) {}

  enumTest(v: ValList) {
    if (v === ValList.ONE) {
    }
  }
}
