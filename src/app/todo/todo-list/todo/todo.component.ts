import { Component, Input } from '@angular/core';
import { Todo } from './../todo.model';
import { TodoService } from '../../../shared/services/todo.service';

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})

export class TodoComponent {
    @Input('todo') todo: Todo;
    @Input('idx') idx: number;
    willDelete: boolean = false;
    alertMsg: string = 'Do you really want to delete this ToDo?';

    constructor(private service: TodoService) {}

    completeTodo() {
        this.service.markTodoAsCompleted(this.idx);
    }

    getUserConfirmation(isConfirmed) {
        (isConfirmed) ? this.removeTodo() : this.willDelete = false;
    }

    removeTodo() {
        this.service.removeTodo(this.idx);
        this.willDelete = false;
    }
}