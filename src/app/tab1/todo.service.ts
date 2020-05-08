import { Injectable } from "@angular/core";
export interface ITodo {
    name: string
  }
export interface ITodoList extends Array<ITodo> {
    
}
@Injectable({providedIn: 'root'})
export class TodoService {
    private todoList: ITodoList = [{name: 'Laundry'}]
    addTodo(name: string){
        this.todoList.push({name})
    }
    removeTodo(index){
        this.todoList.splice(index, 1)
    }
    getTodoList(): ITodoList{
        return this.todoList
    }
}