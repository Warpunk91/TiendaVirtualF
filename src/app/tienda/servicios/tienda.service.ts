import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

interface Tienda {
  id: number;
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})

export class TiendaService {
  private apiUrl = 'http://localhost:8000/tienda/'; 

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(this.apiUrl);
  }



}
