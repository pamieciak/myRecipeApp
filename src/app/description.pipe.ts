import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './interface/recipe-interface';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(description: string[]) {
    return description.join('. ')

  }

}
