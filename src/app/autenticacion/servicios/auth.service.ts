import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  login(username: string, password: string){
    return this.http.post(`${this.apiURL}/login/`, { username, password });
  }

  /*register(userData: any): Observable<any> {
    return this.http.post(`${this.apiURL}/register/`, userData);
  }*/
  
}
