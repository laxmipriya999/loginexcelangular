import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class loginCheck {
  constructor(
    public userName: string,
    public password: string) {
  }
}




@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  public message: string;
  constructor(
    private httpClient: HttpClient
  ) {
  }
  public getUserNames(details) {
    console.log(details)
    
    return this.httpClient.post<String>("http://localhost:5553/userlogins", details);
  }
}