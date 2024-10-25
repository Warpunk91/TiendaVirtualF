import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,            
    MatCardModule,            
    MatFormFieldModule,       
    MatInputModule,          
    MatButtonModule,
    CommonModule,
    MatIconModule
  ],
  providers: [UsuarioService],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})

export class RegistrarComponent {

  username: string = '';
  email: string = '';
  password: string = '';
  direccionUsuario: string = '';
  telefonoUsuario: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  registrar(): void {
      const userData = {
      username: this.username,
      password: this.password,
      email: this.email,
      direccionUsuario: this.direccionUsuario,
      telefonoUsuario: this.telefonoUsuario
    };

    this.usuarioService.register(userData).subscribe({
      next: (res) => {
        console.log('Usuario registrado', res);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error en el registro', err);
      }
    });
  }
  
}
