import { Component, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Todo } from './../todo.model';
import { TodoService } from '../../../shared/services/todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    animations: [
        trigger('fade', [
            state('void', style({ opacity: 0 })),
            transition('void => *', [
                animate(500)
            ])
        ])
    ]
})

export class TodoComponent {
    @Input() todo: Todo;
    @Input() idx: number;
    willDelete = false;
    alertMsg = 'Do you really want to delete this ToDo?';

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
