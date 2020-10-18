import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ITodo} from '../models/todo';
import {TodoService} from '../services/todo.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoResolver implements Resolve<ITodo> {
  constructor(private service: TodoService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.service.getTodo(+route.paramMap.get('id'));
  }
}
