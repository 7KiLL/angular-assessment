import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ITodo} from '../../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todo: ITodo = this.route.snapshot.data.todo;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  handleEdit($event: ITodo): void {
    this.todo = $event;
  }

  handleComplete(): void {
    this.todo = {
      ...this.todo,
      completed: true
    };
  }

  handleUncomplete(): void {
    this.todo = {
      ...this.todo,
      completed: false
    };
  }

  handleDelete(): void {
    this.router.navigate(['home'], {
      queryParams: {
        userId: this.todo.userId
      }
    });
  }
}
