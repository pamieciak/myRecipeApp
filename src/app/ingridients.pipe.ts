import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingridients'
})
export class IngridientsPipe implements PipeTransform {

  transform(value:any): any {
    return Object.keys(value)
  }

}
