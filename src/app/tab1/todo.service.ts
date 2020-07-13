import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";
import { take } from "rxjs/operators";
export interface ITodo {
  name?: string;
  id: number
}
export interface ITodoList extends Array<ITodo> {}
@Injectable({ providedIn: "root" })
export class TodoService {
  todoStream = new BehaviorSubject<ITodoList>([{ name: "Laundry", id: 0 }]);
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
          this.todoStream.next(this.editTodo(todos, action.payload))
          break;
        case "remove":
          this.todoStream.next(this.removeTodo(todos, action.payload))
          break;
      }
    });
  }
  addTodo(todos: ITodoList, nextOne: ITodo) {
    return [...todos, nextOne]
  }
  removeTodo(todos: ITodoList, v: ITodo){
    let index = todos.findIndex(el => el.id === v.id)
    todos.splice(index, 1); 
    return todos
  }
//   getTodoList(): ITodoList {
//     return []
//   }
  editTodo(todos: ITodoList, editValue: ITodo){
    let index = todos.findIndex(el => el.id === editValue.id)
    todos.splice(index, 1, editValue)
    return todos
  }
  // makeCall(val1, val2){
  //     axios.post('/api/login', {username: val1, password: val2}).then(result => {
  //         //do something
  //     })
  // }
}
