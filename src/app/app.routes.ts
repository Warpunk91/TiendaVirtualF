import { Routes } from '@angular/router';
import { LoginComponent } from './autenticacion/componentes/login/login.component';
import { ListaproductoComponent } from './home/componentes/listaproducto/listaproducto.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: ListaproductoComponent
    },
    
];
