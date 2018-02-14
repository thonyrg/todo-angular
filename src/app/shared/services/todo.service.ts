import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';
import { Todo } from './../../todo/todo-list/todo.model';

export class TodoService {
    todosObs: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

    getTodos() {
        if(typeof(localStorage) !== undefined) {
            if(localStorage.allTodos) {
                let allTodos = JSON.parse(localStorage.getItem('allTodos'));
                this.todosObs.next(allTodos);
            }
        }
    }

    addTodo(title: string) {
        if(typeof(localStorage) !== undefined) {
            if(localStorage.allTodos) {
                let allTodos: Todo[] = JSON.parse(localStorage.getItem('allTodos'));
                allTodos.push(new Todo(allTodos.length, title, false));
                this.todosObs.next(allTodos);
                localStorage.setItem('allTodos', JSON.stringify(allTodos));
            } else {
                let allTodos: Todo[] = [];
                allTodos.push(new Todo(0, title, false));
                this.todosObs.next(allTodos);
                localStorage.setItem('allTodos', JSON.stringify(allTodos));
            }
        }
    }

    markTodoAsCompleted(idx: number) {
        if(typeof(localStorage) !== undefined) {
            if(localStorage.allTodos) {
                let allTodos: Todo[] = JSON.parse(localStorage.getItem('allTodos'));
                allTodos[idx].isCompleted = true;
                this.todosObs.next(allTodos);
                localStorage.setItem('allTodos', JSON.stringify(allTodos));
            }
        }
    }

    removeTodo(idx: number) {
        if(typeof(localStorage) !== undefined) {
            if(localStorage.allTodos) {
                let allTodos: Todo[] = JSON.parse(localStorage.getItem('allTodos'));
                allTodos.splice(idx, 1);
                this.todosObs.next(allTodos);
                localStorage.setItem('allTodos', JSON.stringify(allTodos));
            }
        }
    }
}