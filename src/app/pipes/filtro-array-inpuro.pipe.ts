import { FiltroArrayPipe } from './filtro-array.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArrayInpuro',
  pure: false
})
export class FiltroArrayInpuroPipe extends FiltroArrayPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

}
