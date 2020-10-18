import {Component, OnInit, Self} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  providers: [TodoService]
})
export class AddTodoComponent implements OnInit {
  public userId = this.route.snapshot.queryParams.userId;
  private titleFormControl: FormControl;
  constructor(@Self() private todoService: TodoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.titleFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
  }

  handleAdd(): void {
    this.todoService.addTodo(this.titleFormControl.value, this.userId)
      .pipe(
        take(1),
        tap(() => this.router.navigate(['/', 'home']))
      ).subscribe();
  }
}
