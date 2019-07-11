import { Component, OnInit } from '@angular/core';
import * as EQUIPOS from './../../assets/data/equipos.json';
import { Equipo } from './../_interfaces/equipo.interface';
import { Jugador } from './../_interfaces/jugador.interface';
import { EquiposService } from './../_services/equipos.service';
import { JugadoresService } from './../_services/jugadores.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {
  nombre: string = 'Felinos';
  estatus: boolean = false;
  // jugador: string = 'Carlos';

  jugadores: Jugador[] = [];
  equipos: Equipo[];

  jugador: Jugador = {
    nombre: 'Diego',
    edad: 26,
    apodo: 'Cadete',
    foto: 'imagen.jpg',
    posicion: 'Defensa',
    estado: false
  };

  step = 0;

  colorActivo = 'blue';
  colorInactivo = 'red';

  presupuesto = 18000000;
  actualizacion = new Date();
  aficionados = 10000000;
  efectividad = 0.8732;
  busqueda = '';

  isLoading = false;

  constructor(
    private jugadoresService: JugadoresService,
    private equiposService: EquiposService
  ) {}

  ngOnInit() {
    this.nombre = 'Real Madrid';

    // this.jugadores = JUGADORES as any;
    this.equipos = EQUIPOS as any;

    this.obtenerJugadores();
  }

  obtenerJugadores() {
    this.isLoading = true;

    // this.jugadoresService.nombre;

    this.jugadoresService.obtener().subscribe((jugadores: Jugador[]) => {
      this.jugadores = jugadores;
      this.isLoading = false;
    });
  }

  obtenerEquipos;

  agregarJugador() {
    let jugador = 'Sergio';
    jugador = 'Iván';

    this.jugador.nombre = jugador;
  }

  actualizarEstado(jugador: Jugador, i: number, event) {
    jugador.estado = event;
    this.step = i;
    //this.jugador.estado = event;
    // this.estatus = event;
  }

  activarJugador(jugador: Jugador) {
    jugador.estado = true;
  }

  mostrarDatos(i: number) {
    this.step = i;
  }

  obtenerColor(estado: boolean) {
    let color = 'green';
    if (estado) {
      color = 'blue';
    } else {
      color = 'red';
    }

    return color;
  }
}
