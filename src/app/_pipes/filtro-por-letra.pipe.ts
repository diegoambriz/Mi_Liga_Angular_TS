import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPorLetra'
})
export class FiltroPorLetraPipe implements PipeTransform {
  transform(items: any[], value: string): any {
    if (items.length === 0 || !items) {
      return items;
    }

    return items.filter(
      item => item.nombre.toLowerCase().indexOf(value.toLowerCase()) >= 0
    );
  }
}
