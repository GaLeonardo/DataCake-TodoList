import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoService]
})


export class AppComponent {
  c: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  Todo = [{id: 0, title: 'todo', isCompleted:false, isEdit:false}]
  newTodo;

  constructor(private api: TodoService) {
    this.getTodoList();
    this.newTodo = {id: -1, title: '', isCompleted: Boolean}
  }


  getTodoList = () => {
    this.api.getTodoList().subscribe(
      data => {
        this.Todo = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  addTodoList = () => {
    this.api.addTodoList(this.newTodo).subscribe(
      data => {
        this.Todo.push(data);
        this.newTodo.title = '';
      },
      error => {
        console.log(error)
      }
    )
  };

  deleteTodoList = (i: number) => {
    this.api.deleteTodoList(i).subscribe(
      data => {
        console.log(this.newTodo.id)
        this.getTodoList();
      },
      error => {
        console.log(this.newTodo.id);
      }
    )
  };



  doneTodoList = (c: any) => {
    this.api.doneTodoList(c).subscribe(
      data => {
        this.getTodoList();
      },
     error => {
        console.log(error);
      }
    );

  }

  openEdit(c: any) {
    c.isEdit = true
  } 

  updateTodoList = (c: any) => {
    this.api.updateTodoList(c).subscribe(
      data => {
        this.getTodoList();
      },
      error => {
        console.log(error);
      }
    );
  }

}
