import { Injectable } from '@angular/core';
import { State, StateToken, Action, StateContext, createSelector } from '@ngxs/store';


export interface ITodo {
    name?: string;
    id: number
}

export interface ITodoList extends Array<ITodo> {}

export const TODO_STATE_TOKEN = new StateToken<ITodoList>('todo');

export class AddTodo {
    static readonly type = '[tab2] Add Todo';
    constructor(public nextOne: ITodo) {}
}

@State<ITodoList>({
  name: TODO_STATE_TOKEN,
  defaults: [{ name: "Laundry", id: 0 }]
})

@Injectable()

export class TodoState {
    @Action(AddTodo, { cancelUncompleted: true })
  addTodo(ctx: StateContext<ITodoList>, action: AddTodo) {
    ctx.setState([...ctx.getState(), action.nextOne])
  }
}

export const todosSelector = createSelector([TodoState], (state: ITodoList) => {
    return state
  });