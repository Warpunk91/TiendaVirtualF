import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService{

  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> { 
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
     });
    console.log(userData);
    return this.http.post(`${this.apiUrl}/register/`, (userData), { headers });
  }
}
