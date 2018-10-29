import { Component } from '@angular/core';
import { TodoService } from '../../shared/services/todo.service';

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.scss']
})

export class AddTodoComponent {

    constructor(private service: TodoService) {}

    addTodo(e) {
        if (e.keyCode === 13) {
            if (e.target.value.trim() !== '') {
                this.service.addTodo(e.target.value);
                e.target.value = '';
            }
        }
    }
}
