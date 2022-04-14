import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiRoot = "http://localhost:8000";
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'})

  constructor(private http: HttpClient) { }
    
  getTodoList(): Observable<any>{
    return this.http.get(this.apiRoot + '/api/todo/', {headers: this.httpHeaders});
  }

  addTodoList(newTodo: {title: string;}): Observable<any>{
    const body = {title: newTodo.title}
    return this.http.post(this.apiRoot + '/api/todo/', body,
     {headers: this.httpHeaders});
  }

  deleteTodoList(id: number): Observable<any> {
    return this.http.delete(this.apiRoot + '/api/todo/' + id + '/',
    {headers: this.httpHeaders});
  }

  doneTodoList(c: any): Observable<any> {
    const body = {id: c.id, title: c.title, isCompleted: !c.isCompleted};
    console.log(this.apiRoot + '/api/todo/' + c.id + '/', body)
    return this.http.put(this.apiRoot + '/api/todo/' + c.id + '/', body,
    {headers: this.httpHeaders});
  }

  updateTodoList(c: any): Observable<any> {
    const body = {id: c.id, title: c.title, isCompleted: c.isCompleted};
    console.log(this.apiRoot + '/api/todo/' + c.id + '/', body)
    return this.http.put(this.apiRoot + '/api/todo/' + c.id + '/', body,
    {headers: this.httpHeaders});
  }
}