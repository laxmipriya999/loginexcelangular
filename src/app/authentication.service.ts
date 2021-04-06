import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor( 
  ) { }
  authenticate(username, password) {
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }
  //Added
  authenticateUser(username, password) {
    if (username === "user" && password === "user") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    console.log(sessionStorage.getItem('this.user.userName'))
    console.log(sessionStorage.getItem('userName'))
    let user = sessionStorage.getItem('this.user.userName')
    console.log(user != null)
    return (user != null)
  }
  
}
