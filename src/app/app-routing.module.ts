import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponent } from './equipo/equipo.component';
import { JugadoresComponent } from './jugadores/jugadores.component';

const routes: Routes = [
  { path: '', redirectTo: 'equipos', pathMatch: 'full' },
  { path: 'equipos', component: EquipoComponent },
  { path: 'jugadores', component: JugadoresComponent },
  { path: '**', component: EquipoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
