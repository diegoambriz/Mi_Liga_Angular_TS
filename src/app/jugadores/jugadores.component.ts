import { Component, OnInit } from '@angular/core';
import { Jugador } from './../_interfaces/jugador.interface';
import { JugadoresService } from './../_services/jugadores.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss']
})
export class JugadoresComponent implements OnInit {
  jugadores: Jugador[] = [];
  isLoading = false;

  constructor(private jugadoresService: JugadoresService) {}

  ngOnInit() {
    this.isLoading = true;
    this.jugadoresService.obtener().subscribe((jugadores: Jugador[]) => {
      this.jugadores = jugadores;
      this.isLoading = false;
    });
  }
}
