import {Component, OnInit, Self} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [TodoService]
})
export class HomeComponent implements OnInit {

  public userId = this.route.snapshot.queryParams.userId;
  public todos$ = this.todoService.getTodos({userId: this.userId});

  constructor(@Self() private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


}
