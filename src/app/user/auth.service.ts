import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlUsers = "/assets/users.json";
  constructor(private http: HttpClient) { }


  authUser(user: User,recordar): Observable<User> {
    return this.http.get<User>(this.urlUsers)
    .pipe(map(u => {
      u['passwd'] = user.passwd;
      localStorage.setItem('token',u.token);
      if (recordar)
        localStorage.setItem('login',u.login);
    return u;
  }));
  }

  isAuth(): boolean{
    if (localStorage.getItem('token')){
      if(localStorage.getItem('token').length > 2)
        return true;
    } else {
      return false;
    }

  }

  logOut(): void{
    localStorage.removeItem('token');
  }
}
