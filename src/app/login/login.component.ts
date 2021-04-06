import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { HttpClientService, loginCheck } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = ''
  password = ''
  invalidLogin = false
  user: loginCheck = new loginCheck("", "");
  constructor(private router: Router,
    public loginservice: AuthenticationService,
    private httpClientService: HttpClientService)
     { }

  ngOnInit() {
  }

  isUserLoggedIn() {
    sessionStorage.setItem('userName', this.user.userName)
    let user = this.userName;
    console.log(user != null)
    return (user != null)
  }

  checkLogin() {
    if (this.user.password == "" || this.user.userName== "")                        
    { 
        window.alert("Please enter your Username/password"); 
        return false; 
    }
console.log(this.userName);
console.log(this.user)
    this.httpClientService.getUserNames(this.user)
        .subscribe(data => {
          if(data){
            window.alert("Loggin successful")
            //this.router.navigate(['/home']);
          }else{
            window.alert("Please enter correct credentials")
            this.invalidLogin = true
          }
        }); 
  }

}
