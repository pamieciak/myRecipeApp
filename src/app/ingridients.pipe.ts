import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingridients'
})
export class IngridientsPipe implements PipeTransform {

  transform(ing: {name:string, value:number}[]) {
    return ing.values
  }

}
