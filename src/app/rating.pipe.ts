import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(recipe: number) {
    return '👏🏾'.repeat(recipe)
  }

}
