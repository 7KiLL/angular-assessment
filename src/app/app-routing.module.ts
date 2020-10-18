import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CheckUserIdGuard} from './guards/check-user-id.guard';
import {TodoComponent} from './pages/todo/todo.component';
import {TodoResolver} from './resolvers/todo.resolver';
import {TodoNotFoundComponent} from './pages/todo-not-found/todo-not-found.component';
import {AddTodoComponent} from './pages/add-todo/add-todo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [CheckUserIdGuard]
  },
  {
    path: 'todo',
    component: AddTodoComponent
  },
  {
    path: 'todo/:id',
    component: TodoComponent,
    resolve: {
      todo: TodoResolver
    }
  },

  {
    path: '**',
    component: TodoNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
