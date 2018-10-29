import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './../../shared/services/todo.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
    todos: Todo[] = [];

    constructor(private service: TodoService) {}

    ngOnInit() {
        this.service.getTodos();
        this.service.todosObs
            .subscribe(todos => {
                this.todos = todos;
            });
    }
}
