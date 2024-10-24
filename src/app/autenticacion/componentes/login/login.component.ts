import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule, // Angular Material necesita animaciones
    FormsModule,              // Para manejar [(ngModel)]
    MatCardModule,            // Para el mat-card
    MatFormFieldModule,       // Para los campos de formulario
    MatInputModule,           // Para los inputs
    MatButtonModule,        // Para los botones
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
  
})
export class LoginComponent {

  constructor(private authService: AuthService,  private router: Router) { }

  username: string = '';
  password: string = '';
  
  login() {
    console.log("si");
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login exitoso', response);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error en login', error);
      }
    );
  }

}
