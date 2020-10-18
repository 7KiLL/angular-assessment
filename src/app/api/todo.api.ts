import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ITodo} from '../models/todo';
import {HttpClient, HttpParams} from '@angular/common/http';

export interface ITodoParams {
  userId?: number;
  completed?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoApi {
  private URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public fetchTodos(params?: ITodoParams): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${this.URL}todos`, {
      params: params as HttpParams
    });
  }

  public fetchTodo(id: number, params?: ITodoParams): Observable<ITodo> {
    return this.http.get<ITodo>(`${this.URL}todos/${id}`, {
      params: params as HttpParams
    });
  }

  public postTodo(title: string, userId: number): Observable<ITodo> {
    return this.http.post<ITodo>(`${this.URL}todos`, {
      title,
      userId,
      completed: false
    });
  }
}
