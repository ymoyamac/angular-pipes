import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interface';

@Pipe({
  name: 'sorted'
})
export class SortedPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy: string = 'none', ...args: unknown[]): Hero[] {
    if (sortBy === 'none') {
      return heroes;
    }
    if (sortBy === 'name') {
      heroes = heroes.sort((heroLeft, heroRight) => (heroLeft.name > heroRight.name) ? 1 : -1 );
      return heroes;
    }
    if (sortBy === 'value') {
      heroes = heroes.sort((heroLeft, heroRight) => (heroLeft.canFly > heroRight.canFly) ? -1 : 1 );
      return heroes;
    }
    if (sortBy === 'color') {
      heroes = heroes.sort((heroLeft, heroRight) => (heroLeft.color > heroRight.color) ? 1 : -1 );
      return heroes;
    }
    return heroes;
  }

}
