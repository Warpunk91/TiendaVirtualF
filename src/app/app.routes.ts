import { Routes } from '@angular/router';
import { LoginComponent } from './autenticacion/componentes/login/login.component';
import { ListaproductoComponent } from './home/componentes/listaproducto/listaproducto.component';
import { RegistrarComponent } from './usuarios/componentes/registrar/registrar.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: ListaproductoComponent
    },
    { 
        path: 'register', component: RegistrarComponent 
    },
    
];
