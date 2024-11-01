import { Routes } from '@angular/router';
import { LoginComponent } from './autenticacion/componentes/login/login.component';
import { RegistrarComponent } from './usuarios/componentes/registrar/registrar.component';
import { HomeComponent } from './home/componentes/home/home.component';

export const routes: Routes = [   
    {
        path: '',
        pathMatch:  'full',
        redirectTo: 'home',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    { 
        path: 'register', 
        component: RegistrarComponent 
    },
    { 
        path: 'home', 
        component: HomeComponent 
    },
    
];
