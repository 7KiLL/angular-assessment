import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITodo} from '../../models/todo';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() todo: ITodo;
  // tslint:disable-next-line:variable-name
  private _editMode = false;
  private titleFormControl: FormControl;
  @Input()
  // @ts-ignore
  get editMode(): boolean { return this._editMode; }
  // @ts-ignore
  set editMode(value: any): boolean { this._editMode = this.coerceBooleanProperty(value); }

  @Output() uncompleted = new EventEmitter();
  @Output() completed = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() edited = new EventEmitter<ITodo>();



  constructor() { }

  ngOnInit(): void {
    this.titleFormControl = new FormControl(this.todo.title, [
      Validators.required,
      Validators.minLength(3)
    ]);
  }

  handleUncomplete(): void {
    this.uncompleted.emit();
  }

  /** Coerces a data-bound value (typically a string) to a boolean. */
  private coerceBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
  }

  handleComplete(): void {
    this.completed.emit();
  }

  handleDelete(): void {
    this.deleted.emit();
  }

  handleEdit(): void {
    this.edited.emit({
      ...this.todo,
      title: this.titleFormControl.value
    });
  }
}
