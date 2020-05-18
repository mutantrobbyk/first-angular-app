import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { take } from "rxjs/operators";
export interface ITodo {
  name: string;
  id: number
}
export interface ITodoList extends Array<ITodo> {}
@Injectable({ providedIn: "root" })
export class TodoService {
  todoStream = new BehaviorSubject([{ name: "Laundry", id: 0 }]);
//   private todoList: ITodoList = [];
  todoActionHandler(action: {
    type: "add" | "edit" | "remove";
    payload: ITodo;
  }) {
    this.todoStream.pipe(take(1)).subscribe((todos) => {
      switch (action.type) {
        case "add":
            this.todoStream.next(this.addTodo(todos, action.payload))
          break;
        case "edit":
          break;
        case "remove":
          break;
      }
    });
  }
  addTodo(todos: ITodoList, nextOne: ITodo) {
    return [...todos, nextOne]
  }
  removeTodo(index: number): void {
    // this.todoList.splice(index, 1);
  }
//   getTodoList(): ITodoList {
//     return []
//   }
  editTodo(value: string, index: number): void {
    // this.todoList[index] = { name: value };
  }
  // makeCall(val1, val2){
  //     axios.post('/api/login', {username: val1, password: val2}).then(result => {
  //         //do something
  //     })
  // }
}
