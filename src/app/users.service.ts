import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable(
  {providedIn: 'root'
})
export class UsersService {
  private url: string = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient) { }
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }
  getUsers(): Observable<User> {
    return this.http.get<User>(this.url);
  }
  createUser (user: User): Observable<User> {
    return this.http.post<User>(this.url, user, httpOptions);
  }
}
