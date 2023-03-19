import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-sorted',
  templateUrl: './sorted.component.html',
  styles: [
  ]
})
export class SortedComponent {
  isUpperCase: boolean = false;
  sortBy: string = '';
  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: [Color.BLUE, Color.RED, Color.YELLOW]
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: [Color.BLUE, Color.RED]
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.BLACK
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.GREEN
    },
    {
      name: 'Ironman',
      canFly: true,
      color: [Color.RED, Color.YELLOW]
    },
    {
      name: 'Thor',
      canFly: true,
      color: [Color.BLACK, Color.BLUE, Color.RED]
    },
    {
      name: 'Green Lanter',
      canFly: true,
      color: Color.GREEN
    },
    {
      name: 'Captan America',
      canFly: false,
      color: [Color.BLUE, Color.RED]
    },
  ];

  toggleCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  setSortBy(sortValue: string): void {
    this.sortBy = sortValue;
  }
}
