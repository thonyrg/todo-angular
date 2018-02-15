import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../shared/services/todo.service';

@Component({
    selector: 'todo-stats',
    templateUrl: './todo-stats.component.html',
    styleUrls: ['./todo-stats.component.scss']
})

export class TodoStatsComponent implements OnInit {

    numTodos: number = 0;
    numCompletedTodos: number = 0;

    constructor(private service: TodoService) {}

    ngOnInit() {
        this.service.todosObs
            .subscribe(todos => {
                this.numTodos = todos.length;
                let allCompleted = todos.filter(this.isCompleted);
                this.numCompletedTodos = allCompleted.length;
            })
    }

    isCompleted(t) {
        return t.isCompleted;
    }
}