import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CaesComponent } from './pages/caes/caes.component';
import { GatosComponent } from './pages/gatos/gatos.component';
import { OngsComponent } from './pages/ongs/ongs.component';
import { EventosComponent } from './pages/eventos/eventos.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'caes',
    component: CaesComponent
  },
  {
    path: 'gatos',
    component: GatosComponent
  },
  {
    path: 'ongs',
    component: OngsComponent
  },
  {
    path: 'eventos',
    component: EventosComponent
  },
];
