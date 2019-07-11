import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Angular Material Modules
import { MatButtonModule, MatCardModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { EquipoComponent } from './equipo/equipo.component';
import { JuegoComponent } from './juego/juego.component';
import { JugadorComponent } from './jugador/jugador.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { LoginComponent } from './login/login.component';
import { FiltroPorLetraPipe } from './_pipes/filtro-por-letra.pipe';
import { EquiposService } from './_services/equipos.service';
import { JugadoresService } from './_services/jugadores.service';







@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    EquipoComponent,
    JugadorComponent,
    LoginComponent,
    FiltroPorLetraPipe,
    JugadoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    AppRoutingModule
  ],
  providers: [JugadoresService, EquiposService],
  bootstrap: [AppComponent]
})
export class AppModule { }
