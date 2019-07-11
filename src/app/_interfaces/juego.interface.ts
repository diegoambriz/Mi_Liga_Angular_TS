export interface Juego {
  id?: string,
  local: string,
  visitante: string,
  fecha: Date,
  anotacionesLocal: number,
  anotacionesVisitante: number,
  jugadorDestacado: string,
  lugar: string
}