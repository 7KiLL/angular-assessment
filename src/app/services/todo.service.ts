import { Injectable } from '@angular/core';
import {ITodoParams, TodoApi} from '../api/todo.api';
import {shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ITodo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private todoApi: TodoApi) {}

  public getTodos(params?: ITodoParams): Observable<ITodo[]> {
    return this.todoApi.fetchTodos(params).pipe(
      shareReplay(1)
    );
  }

  getTodo(id: number, params?: ITodoParams): Observable<ITodo> {
    return this.todoApi.fetchTodo(id, params);
  }

  addTodo(title: string, userId: number): Observable<ITodo> {
    return this.todoApi.postTodo(title, userId);
  }
}
