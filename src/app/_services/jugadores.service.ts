import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JugadoresService {
  nombre = 'Roswell';

  constructor(private http: HttpClient) {}

  obtener() {
    return this.http.get('https://api-mi-liga.now.sh/api/jugadores');
  }
}
