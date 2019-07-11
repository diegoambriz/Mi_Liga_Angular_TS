import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Jugador } from './../_interfaces/jugador.interface';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit {
  @Input('jugador')
  jugador: Jugador;

  // jugador: string = 'Sergio';

  @Input()
  equipo: string = 'Sin equipo';

  @Output('onActivate')
  estado: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  desactivar() {
    this.estado.emit(false);
  }
}
