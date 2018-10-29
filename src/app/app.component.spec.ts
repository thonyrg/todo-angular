import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo-list/todo/todo.component';
import { TodoStatsComponent } from './todo/todo-stats/todo-stats.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { AlertComponent } from './shared/alert/alert.component';
import { TodoService } from './shared/services/todo.service';

export class TodoServiceStub {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoComponent,
        AlertComponent,
        HeaderComponent,
        AddTodoComponent,
        TodoListComponent,
        TodoStatsComponent
      ],
      providers: [{ provide: TodoService, useClass: TodoServiceStub}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
