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
    removeTodo(index: number): void{
        this.todoList.splice(index, 1)
    }
    getTodoList(): ITodoList{
        return this.todoList
    }
    editTodo(value: string, index: number): void{
        this.todoList[index] = {name: value}
    }
    // makeCall(val1, val2){
    //     axios.post('/api/login', {username: val1, password: val2}).then(result => {
    //         //do something
    //     })
    // }
}