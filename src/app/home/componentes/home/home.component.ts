import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HomeService } from '../../service/home.service';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule, 
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatInput,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  tiendas: any;
  productos: any;
  filtro: string  = '';


  constructor(private homeService: HomeService) {}

  ngOnInit(){
    this.obtenerProductos();
    this.obtenerTiendas();
  }


  obtenerProductos(){
    this.homeService.getProducto(this.filtro).subscribe(
      (data) => {
        this.productos = data;
      },
      error => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  obtenerTiendas(){
    this.homeService.getTienda(this.filtro).subscribe(
      (data) => {
        this.tiendas = data;
      },
      error => {
        console.error('Error al obtener las tiendas:', error);
      }
    );
  }


  filtrarProductos(){
    this.obtenerTiendas();
    this.obtenerProductos();
  }


  
}