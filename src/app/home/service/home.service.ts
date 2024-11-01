import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService{

  private apiUrl = 'http://localhost:8000'; 

  constructor(private http: HttpClient){ }
  
  getProducto(filtro: string = ''):  Observable<any> {
    let url = this.apiUrl;
    if (filtro) {
      url += `/productos/?search=${filtro}`;
    }else{
      url += `/productos/`
    }
    return this.http.get<any>(`${url}`);
  }

  getTienda(filtro: string = ''):  Observable<any> {
    let url = this.apiUrl;
    if (filtro) {
      url += `/tiendas/?search=${filtro}`;
    }else{
      url += `/tiendas/`
    }
    return this.http.get<any>(`${url}`);
  }
} 